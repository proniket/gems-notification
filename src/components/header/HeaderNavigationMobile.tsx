import { FC } from "react";

import HamburgerMenu from "react-hamburger-menu";
import { shallowEqual, useDispatch } from "react-redux";

import { changeMobileMenuState } from "../../redux/features/create/createSlice";
import { useAppSelector } from "../../redux/hook";

// import HeaderMobileMenu from "./HeaderMobileMenu";
import { HeaderNavigationMobileProps } from "./model";

const HeaderNavigationMobile: FC<HeaderNavigationMobileProps> = ({
  isAuthenticated,
  isWeb3Enabled,
}) => {
  const dispatch = useDispatch();

  const { mobileMenuState } = useAppSelector(
    ({ createData }) => ({
      mobileMenuState: createData.data.mobileMenuState,
    }),
    shallowEqual
  );

  // useEffect(() => {
  //   mobileMenuState
  //     ? (document.body.style.overflow = "hidden")
  //     : (document.body.style.overflow = "unset");
  // }, [mobileMenuState]);

  return (
    <div className="header__navigation--mobile">
      {/* <Wallet
        onClick={() => {
          if (isAuthenticated || isWeb3Enabled) {
            dispatch(menuPopup(!menuPopupState));
          } else {
            dispatch(connectWallet(!connectWalletState));
          }
        }}
      /> */}
      <div className="header__navigation--mobile--burgerMenu">
        <div onClick={() => dispatch(changeMobileMenuState(!mobileMenuState))}>
          <HamburgerMenu
            isOpen={mobileMenuState}
            color="#fff"
            menuClicked={() =>
              dispatch(changeMobileMenuState(!mobileMenuState))
            }
            width={16}
            height={15}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigationMobile;
