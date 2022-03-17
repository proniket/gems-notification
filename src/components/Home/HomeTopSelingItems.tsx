import { v4 as uuid_v4 } from "uuid";

import TitleRouting from "../ReusableComponents/TitleRouting";

import HomeSalingContainerMObile from "./HomeSalingContainerMobile";
import { sellingFakeData } from "./HomeTopSelingItemsFakeData";

const HomeTopSelingItems = () => {
  return (
    <>
      <HomeSalingContainerMObile />
      <div className="Selling__container">
        <TitleRouting
          title="Top selling items"
          pathName="/"
          link="See All"
          className="TopSelling"
        />
        <div className="Selling__container--HomeTopSelingItems">
          {sellingFakeData.map(({ img, price, description }, i) => (
            <div
              className="Selling__container--HomeTopSelingItems--items__container"
              key={uuid_v4()}
            >
              <div className="Selling__container--HomeTopSelingItems--items__container--img__number">
                <div className="Selling__container--HomeTopSelingItems--items__container--img__number--item__number">
                  {i + 1}
                </div>
                <div className="Selling__container--HomeTopSelingItems--items__container--img__number--item__image">
                  <img src={img} alt="#" />
                </div>
              </div>
              <div className="Selling__container--HomeTopSelingItems--items__container--description__price">
                <div className="Selling__container--HomeTopSelingItems--items__container--description__price--description">
                  {description}
                </div>
                <div className="Selling__container--HomeTopSelingItems--items__container--description__price--price">
                  {price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HomeTopSelingItems;
