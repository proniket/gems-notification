import { shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";

import { useAppSelector } from "../../redux/hook";
import { clientConfig } from "../../utils/config";

const Footer = () => {
  const { progress, connectWalletState, createPopupState, menuPopupState } =
    useAppSelector(
      ({ createData }) => ({
        progress: createData.data.progress,
        connectWalletState: createData.data.connectWalletState,
        createPopupState: createData.data.createPopupState,
        menuPopupState: createData.data.menuPopupState,
      }),
      shallowEqual
    );

  const config = process.env.CLIENT
    ? clientConfig[process.env.CLIENT]
    : clientConfig["NextGem"];

  return (
    <div
      className={
        progress !== 0 ||
        connectWalletState ||
        createPopupState ||
        menuPopupState
          ? "footer__container--blur"
          : "footer__container"
      }
    >
      <div className="footer__container__wrapper">
        <div className="footer__description">
          <div className="footer__description--logo">{config.brandName}</div>
          <div className="footer__description--desc">
            <p>{config.description}</p>
          </div>
        </div>
        <div className="footer__services">
          {config && config.footerNavItems
            ? config.footerNavItems.map((footerNav, index) => {
                return (
                  <div key={index}>
                    <div>{footerNav.text}</div>
                    <div>
                      {footerNav.links.length
                        ? footerNav.links.map((flink, index) => {
                            return (
                              <NavLink to={flink.link} key={index}>
                                {flink.text}
                              </NavLink>
                            );
                          })
                        : null}
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright--left">
          <p>© 2021 NFTGem LCC. All rights reserved.</p>
        </div>
        <div className="footer__copyright--right">
          <NavLink to="/">Privacy Policy</NavLink>
          <NavLink to="/">Terms of Service</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
