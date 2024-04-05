import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from './NewsCard';

const Home = () => {
    const newsPaper = useLoaderData();

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
                    {
                        newsPaper.map(news => <NewsCard key={news._id} news={news}/>)
                    }
                </div>

                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;