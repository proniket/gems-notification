import { useEffect } from "react";

import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { v4 as uuid_v4 } from "uuid";

import { getHandleBlog } from "../../redux/features/blog/blogSlice";
import { useAppSelector } from "../../redux/hook";
import history from "../../utils/history";
import TitleRouting from "../ReusableComponents/TitleRouting";
import TitleRoutingMobile from "../ReusableComponents/TitleRoutingMobile";

const HelpFull = () => {
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
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 812,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const dispatch = useDispatch();
  const { blogData }: any = useAppSelector(({ blog }) => ({
    blogData: blog.data,
  }));
  useEffect(() => {
    dispatch(getHandleBlog());
  }, [dispatch]);
  type blogType = {
    title: string;
    feature_image: string;
  };
  return (
    <>
      <div className="Helpful__container">
        <TitleRouting
          title="This might be helpful"
          pathName="/"
          link="More"
          className="Helpful"
        />
        <div className="Helpful__container--section desktop">
          {blogData !== null &&
            blogData.posts.map(({ feature_image, title }: blogType) => (
              <div
                className="Helpful__container--section--items"
                key={uuid_v4()}
                onClick={() => history.push("/blog")}
              >
                <div className="Helpful__container--section--items--img">
                  <img src={feature_image} alt="#" />
                </div>
                <div className="Helpful__container--section--items--description">
                  {title}
                </div>
              </div>
            ))}
        </div>
        <div className="Helpful__container--section mobile">
          <TitleRoutingMobile title="This might be helpful" pathName="/">
            <Slider {...settings}>
              {blogData !== null &&
                blogData.posts.map(({ feature_image, title }: blogType) => (
                  <div
                    className="Helpful__container--section--items"
                    key={uuid_v4()}
                  >
                    <div className="Helpful__container--section--items--img">
                      <img src={feature_image} alt="#" />
                    </div>
                    <div className="Helpful__container--section--items--description">
                      {title}
                    </div>
                  </div>
                ))}
            </Slider>
          </TitleRoutingMobile>
        </div>
      </div>
    </>
  );
};

export default HelpFull;
