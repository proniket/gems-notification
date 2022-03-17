import { FC } from "react";

import { useDispatch } from "react-redux";

import {
  connectWallet,
  createPopup,
  menuPopup,
} from "../../redux/features/create/createSlice";

import HeaderNavigationLink from "./HeaderNavigationLink";
import { HeaderNavigationProps } from "./model";

const HeaderNavigation: FC<HeaderNavigationProps> = ({
  currentId,
  setCurrentId,
  clientConfig,
}) => {
  const dispatch = useDispatch();

  const handleCloseAllPopups = () => {
    dispatch(connectWallet(false));
    dispatch(menuPopup(false));
    dispatch(createPopup(false));
  };

  return (
    <div className="header__navigation__links" onClick={handleCloseAllPopups}>
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
    </div>
  );
};

export default HeaderNavigation;
