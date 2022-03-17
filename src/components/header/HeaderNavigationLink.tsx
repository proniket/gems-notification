import { FC, useState } from "react";

import { Bounce } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

import { HeaderNavigationLinkType } from "./model";

const HeaderNavigationLink: FC<HeaderNavigationLinkType> = ({
  path,
  name,
  id,
  currentId,
  setCurrentId,
}) => {
  const [width, setWidth] = useState(0);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  window.addEventListener(
    "resize",
    () => setInnerWidth(window.innerWidth),
    false
  );

  return (
    <div
      id={id}
      className="header__navigation__links--link"
      onClick={(e) => {
        setWidth(e.currentTarget.offsetWidth);
        setCurrentId(e.currentTarget.id);
      }}
    >
      {id === currentId ? (
        // <Bounce className="header__navigation__links--link--bounce">
        <Bounce
          className={
            innerWidth > 850
              ? "header__navigation__links--link--bounce"
              : "header__navigation__links--link--bounceMedia"
          }
        >
          <div style={{ width: width }}>
            <span></span>
          </div>
        </Bounce>
      ) : null}
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default HeaderNavigationLink;
