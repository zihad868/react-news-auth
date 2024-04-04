import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />

            <div className="grid md:grid-cols-4">
                <div>
                    <LeftSideNav />
                </div>

                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-4xl">this is content</h2>
                </div>

                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;