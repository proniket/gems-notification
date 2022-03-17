import { useHistory } from "react-router";

import { ReactComponent as NotFoundIcon } from "../../assets/notFound/error.svg";
import { ReactComponent as GoBackIcon } from "../../assets/notFound/goBackIcon.svg";

const NotFound = () => {
  const history = useHistory();

  return (
    <div className="notFound">
      <div className="notFound__container">
        <div className="notFound__container__content">
          <p>Page not found</p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque amet vel facilisis imperdiet.
          </span>
          <div>
            <GoBackIcon onClick={() => history.goBack()} />
            <span onClick={() => history.push("/")}>Home Page</span>
          </div>
        </div>
        <div>
          <NotFoundIcon />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
