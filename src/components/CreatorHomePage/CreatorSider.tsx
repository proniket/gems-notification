import { useState } from "react";

import Slider from "react-slick";
import { v4 as uuid_v4 } from "uuid";

import CreatorSliderCard from "./CreatorSliderCard";
import { creatorSliderFakeData } from "./CreatorSliderFakeData";

const CreatorSider = () => {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

  window.addEventListener(
    "resize",
    () => setDisplayWidth(window.innerWidth),
    false
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2.25,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="creatorSlider">
      <div className="creatorSlider__container">
        {displayWidth <= 620 ? (
          <div className="creatorSlider__container--mobile">
            {creatorSliderFakeData.map(() => (
              <CreatorSliderCard key={uuid_v4()} />
            ))}
          </div>
        ) : (
          <Slider {...settings}>
            {creatorSliderFakeData.map(() => (
              <CreatorSliderCard key={uuid_v4()} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default CreatorSider;
