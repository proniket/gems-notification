import { useMoralisQuery } from "react-moralis";
import { v4 as uuid_v4 } from "uuid";

import TitleRouting from "../ReusableComponents/TitleRouting";

import HomeBrowseCategory from "./HomeBrowseCategory";

const HomeBrowse = () => {
  const qyerryDataGemToken = useMoralisQuery("Collection");

  return (
    <div className="home__browse">
      <div className="home__browse__wrapper">
        <div className="home__browse__wrapper__imageCardBox__container">
          <div className="home__browse__wrapper__imageCardBox__container__wrapper">
            <TitleRouting
              title={"Collections"}
              link={"Explore"}
              pathName={"/collection"}
            />
            {
              <div className="home__browse__wrapper__imageCardBox__container__wrapper__upperPart">
                {qyerryDataGemToken.data.map((item) => (
                  <HomeBrowseCategory
                    key={uuid_v4()}
                    attributes={item.attributes}
                  />
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrowse;
