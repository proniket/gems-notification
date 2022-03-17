import Slider from "react-slick";
import { v4 as uuid_v4 } from "uuid";

import { homeSlickData } from "../Home/HomeSlickSliderFakeData";

import DetailsSliderItem from "./DetailsSliderItem";

const DetailsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1182,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="detailsSlider">
      <div className="detailsSlider__container">
        <Slider {...settings}>
          {homeSlickData.map((item) => (
            <DetailsSliderItem
              collectionName={item.collectionName}
              author={`by ${item.author}`}
              key={uuid_v4()}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DetailsSlider;
