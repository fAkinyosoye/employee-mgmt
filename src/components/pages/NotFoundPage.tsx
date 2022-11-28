import { Link } from "react-router-dom";

import notFoundImage from "../../assets/images/notFoundImage.jpg";
import { Label } from "../atoms";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <img src={notFoundImage} alt="notFoundImage" className="w-4/5 lg:w-1/2" />
      {/* <a href="https://www.freepik.com/free-vector/404-error-with-people-holding-numbers-concept-illustration_20824295.htm#query=404%20page&position=32&from_view=search&track=sph">Image by storyset</a> on Freepik */}
      <Label color="#000" className="text-center" mt="2rem" mb="0">
        Page not found{" "}
        <Link to="/" className="text-boiGreen">
          Go back home
        </Link>
      </Label>
    </div>
  );
};

export { NotFoundPage };
