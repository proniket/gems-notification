import { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { v4 as uuid_v4 } from "uuid";

import { handleFaqData } from "../../redux/features/faq/faqSlice";
import { useAppSelector } from "../../redux/hook";

import HomeFAQItem from "./HomeFAQItem";

const HomeFAQ = () => {
  const faqRef = useRef<any>();
  const dispuch = useDispatch();
  const { data } = useAppSelector(({ faq }) => ({
    data: faq.faqData,
  }));

  useEffect(() => {
    dispuch(handleFaqData());
  }, [dispuch]);

  return (
    <div className="homeFAQ" ref={faqRef}>
      <div className="homeFAQ__faqSection">
        <div className="homeFAQ__faqSection__container">
          <div className="homeFAQ__faqSection__container__data">
            <p>FAQ</p>
            {data !== null &&
              data.posts.map(({ title, excerpt }: any) => (
                <HomeFAQItem
                  answer={excerpt}
                  question={title}
                  key={uuid_v4()}
                  className="homeFAQ__faqSection"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
