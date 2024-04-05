import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <Navbar />

      <div className="grid sm:grid-cols-1 md:grid-cols-4">

        <div className="sm:col-span-1 md:col-span-3">
            <p className="text-4xl">{id}</p>
        </div>

        <div className="col-span-1">
            <RightSideNav />
        </div>

      </div>
    </div>
  );
};

export default NewsDetails;
