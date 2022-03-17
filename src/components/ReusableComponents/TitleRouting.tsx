import React, { FC } from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../assets/home/Arrow.svg";

import { ITitleRout } from "./model";

const TitleRouting: FC<ITitleRout> = ({ title, link, pathName, className }) => {
  return (
    <div className={`${className} TitleRouting`}>
      <div className="TitleRouting--title">{title}</div>
      <div className="TitleRouting--link">
        <Link to={pathName}>
          {link} <Arrow />
        </Link>
      </div>
    </div>
  );
};
export default React.memo(TitleRouting);
