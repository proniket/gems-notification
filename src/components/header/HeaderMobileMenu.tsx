import { FC } from "react";

import { useMoralis } from "react-moralis";
import { shallowEqual, useDispatch } from "react-redux";

import { ReactComponent as DiscordIcon } from "../../assets/header/discordIcon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/header/instagramIcon.svg";
// import SearchIcon from "../../assets/home/SearchIcon";
import { ReactComponent as WalletIcon } from "../../assets/header/walletIcon.svg";
import {
  changeMobileMenuState,
  connectWallet,
  createPopup,
  menuPopup,
} from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";


import HeaderNavigationLink from "./HeaderNavigationLink";
import { HeaderMobileMenuProps } from "./model";

const HeaderMobileMenu: FC<HeaderMobileMenuProps> = ({
  currentId,
  setCurrentId,
  clientConfig,
}) => {
  const dispatch = useDispatch();

  const { mobileMenuState, connectWalletState, menuPopupState } =
    useAppSelector(
      ({ createData }) => ({
        mobileMenuState: createData.data.mobileMenuState,
        connectWalletState: createData.data.connectWalletState,
        menuPopupState: createData.data.menuPopupState,
      }),
      shallowEqual
    );
  const handleOpenConnectWalletModal = () => {
    dispatch(createPopup(false));
    dispatch(connectWallet(!connectWalletState));
  };
  const { isAuthenticated, isWeb3Enabled } = useMoralis();
  
  const handleOpenMenuPopup = () => {
    dispatch(createPopup(false));
    dispatch(menuPopup(!menuPopupState));
    dispatch(changeMobileMenuState(!mobileMenuState));
  };

  return (
    <>
      <div
        className="headerMobileMenu__blur"
        onClick={() => dispatch(changeMobileMenuState(!mobileMenuState))}
      ></div>
      <div className="headerMobileMenu">
        {/* <div
        className={
          mobileMenuState ? "headerMobileMenu_open" : "headerMobileMenu"
        }
      > */}
        {/* <div className="headerMobileMenu_searchPart">
          <SearchIcon color="#C4C4C4" />
          <input type="text" placeholder="Enter your search here" />
        </div> */}
        <div
          className="headerMobileMenu_links"
          onClick={() =>
            setTimeout(
              () => dispatch(changeMobileMenuState(!mobileMenuState)),
              1000
            )
          }
        >
          {clientConfig
            ? clientConfig.headerNavItems.map((nav, index) => {
                return (
                  <HeaderNavigationLink
                    path={nav.link}
                    name={nav.text}
                    id={index.toString()}
                    currentId={currentId}
                    setCurrentId={setCurrentId}
                    key={index}
                  />
                );
              })
            : null}
          <div className="headerMobileMenu_links__createButton">
            <button>Create</button>
          </div>
          {isAuthenticated || isWeb3Enabled ? (
            <div
              className="header__navigation__btn__container--div--black"
              onClick={handleOpenMenuPopup}
            >
              <WalletIcon />
            </div>
          ) : (
            <div
              className="header__navigation__btn__container--div--black"
              onClick={handleOpenConnectWalletModal}
            >
              <button>Connect Wallet</button>
            </div>
          )}
        </div>
        <div className="headerMobileMenu_downPart">
          <DiscordIcon />
          <InstagramIcon />
        </div>
      </div>
    </>
  );
};

export default HeaderMobileMenu;
