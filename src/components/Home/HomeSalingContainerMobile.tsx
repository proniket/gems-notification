import Slider from "react-slick";
import { v4 as uuid_v4 } from "uuid";

import { ReactComponent as Arrow } from "../../assets/home/Arrow.svg";
import TitleRoutingMobile from "../ReusableComponents/TitleRoutingMobile";

import { sellingFakeDataMobile } from "./HomeTopSelingItemsFakeData";

const HomeSalingContainerMObile = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1182,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <TitleRoutingMobile title="Top selling items" link="Explore" pathName="/">
        <div className="selling__mobile">
          <Slider {...settings}>
            {sellingFakeDataMobile.map((item: any) => (
              <div className="selling__mobile__container" key={uuid_v4()}>
                <div className="selling__mobile__container--items">
                  {item.map((content: any, i: number) => (
                    <div
                      className="selling__mobile__container--items--content"
                      key={uuid_v4()}
                    >
                      <div className="selling__mobile__container--items--content--img__container">
                        <div className="selling__mobile__container--items--content--img__container--number">
                          {i + 1}
                        </div>
                        <div className="selling__mobile__container--items--content--img__container--image">
                          <img src={content.img} alt={`${i}`} />
                        </div>
                      </div>
                      <div className="selling__mobile__container--items--content--description">
                        <div className="selling__mobile__container--items--content--description--text">
                          {content.description}
                        </div>
                        <div className="selling__mobile__container--items--content--description--price">
                          {content.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </TitleRoutingMobile>
    </>
  );
};
export default HomeSalingContainerMObile;
