// import HowDoesItWorks from "../ReusableComponents/HowDoesItWorks/HowDoesItWorks";

import HelpFull from "./Helpfull";
import HomeAnnounce from "./HomeAnnounce";
import HomeBrowse from "./HomeBrowse";
import HomeFAQ from "./HomeFAQ";
import HomeSliderMobile from "./HomeSliderMobile";
// import HomeSlickSlider from "./HomeSlickSlider";
import HomeTopSelingItems from "./HomeTopSelingItems";

const Home = () => {
  return (
    <div className="home__container">
      <HomeAnnounce />
      <HomeSliderMobile />
      <HomeBrowse />
      {/* <HowDoesItWorks /> */}
      <HomeTopSelingItems />
      {/* <HomeSlickSlider /> */}
      <HelpFull />
      <HomeFAQ />
    </div>
  );
};

export default Home;
