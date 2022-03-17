import { FC } from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from "../../assets/home/Arrow.svg";

import { ITitleRout } from "./model";
const TitleRoutingMobile: FC<ITitleRout> = (props) => {
  return (
    <div className="TitleRouting__mobile">
      <div className="TitleRouting__mobile--title">{props.title}</div>
      {props.children}
      <div className="TitleRouting__mobile--link">
        <Link to={props.pathName}>
          {props.link}
          {props.link !== undefined && <Arrow />}
        </Link>
      </div>
    </div>
  );
};
export default TitleRoutingMobile;
