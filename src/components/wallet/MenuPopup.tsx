import { useEffect } from "react";

import { useMoralis } from "react-moralis";
import { shallowEqual, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import { ReactComponent as CopyIcon } from "../../assets/header/copyIcon.svg";
import { ReactComponent as ReloadIcon } from "../../assets/wallet/reloadIcon.svg";
import {
  connectWallet,
  menuPopup,
} from "../../redux/features/create/createSlice";
import "../../redux/features/wallet/walletSlice";
import {
  setAccount,
  setBalance,
} from "../../redux/features/wallet/walletSlice";
import { useAppSelector } from "../../redux/hook";
import AnimatedCursorComponent from "../ReusableComponents/AnimatedCursorComponent";

import NativeBalance from "./NativeBalance";

const MenuPopup = () => {
  const { menuPopupState, account, balance } = useAppSelector(
    ({ createData, walletData }) => ({
      menuPopupState: createData.data.menuPopupState,
      account: walletData.account,
      balance: walletData.balance,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    const close = (e: any) => {
      if (e.key === "Escape") {
        dispatch(menuPopup(false));
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [dispatch]);

  const { logout, user, isWeb3Enabled, web3, isAuthenticated } = useMoralis();
  useEffect(() => {
    if (isWeb3Enabled) {
      web3?.eth
        .getAccounts()
        .then((account) => dispatch(setAccount(account[0])));

      web3?.eth
        .getBalance(
          account ? account : "0xB6f9D892Cc52Ae349eCbbd10198bb6dd045fC80b"
        )
        .then((res) => dispatch(setBalance(res)));
    }
  }, [web3, isWeb3Enabled, dispatch, account]);

  const handleCloseMenuPopup = () => dispatch(menuPopup(false));

  const accountFirstPart = user
    ?.get("ethAddress")
    .split("")
    .slice(0, 6)
    .join("");
  const accountSecondPart = user
    ?.get("ethAddress")
    .split("")
    .slice(38, 42)
    .join("");

  const accountFirstPartWC = account?.split("").slice(0, 6).join("");
  const accountSecondPartWC = account?.split("").slice(38, 42).join("");

  const copyAccount = () => {
    navigator.clipboard?.writeText(account);
  };

  const handleLogOut = () => {
    logout();
    dispatch(connectWallet(true));
  };

  const handleClickMenuPopup = (e: any) => {
    if (e.target.className === "menuPopup") {
      dispatch(menuPopup(false));
    }
  };
  return (
    <>
      <AnimatedCursorComponent />
      <div
        className={menuPopupState ? "menuPopup" : "menuPopup--hide"}
        onClick={handleClickMenuPopup}
      >
        <div className="menuPopup__container">
          <div className="menuPopup__container__upperPart">
            <div className="menuPopup__container__upperPart__myWalletDiv">
              <div className="menuPopup__container__upperPart__myWalletDiv--titleDiv">
                <p>My wallet</p>
                <div>
                  <ReloadIcon />
                </div>
              </div>
              <div className="menuPopup__container__upperPart__balance">
                <div className="menuPopup__container__upperPart__balance--balanceDiv">
                  <div>
                    {isWeb3Enabled ? (
                      <span>ETH {balance}</span>
                    ) : isAuthenticated ? (
                      <NativeBalance />
                    ) : (
                      <span>0 ETH</span>
                    )}
                    <p>Total Balance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="menuPopup__container__upperPart__myWalletDiv--tokenDiv">
              <p onClick={copyAccount}>
                {isWeb3Enabled
                  ? `${accountFirstPartWC}...${accountSecondPartWC}`
                  : `${accountFirstPart}...${accountSecondPart}`}
              </p>
              <CopyIcon
                onClick={() => {
                  copyAccount();
                  alert(`${account} was copied on clipboard`);
                }}
              />
            </div>
          </div>
          <div
            className="menuPopup__container__profileDiv"
            onClick={handleCloseMenuPopup}
          >
            <div>
              <NavLink to={pathname}>My Profile</NavLink>
            </div>
            <div onClick={handleLogOut}>
              <NavLink to={pathname}>Log Out</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPopup;
