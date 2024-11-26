import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FeaturedAuctions from "./home-sub-components/FeaturedAuctions";
import UpcomingAuctions from "./home-sub-components/UpcomingAuctions";
import Spinner from "@/custom-components/Spinner";

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
        <div>
          <h1
            className={`text-[#111] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
          >
            Empowering Connections,
          </h1>
          <h1
            className={`text-[#42b9be] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
          >
            Driving Success!
          </h1>
          <div className="flex gap-4 my-8">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/sign-up"
                  className="bg-[#42b9be] border-2 border-[#42b9be] hover:bg-[#ffffff] hover:text-[#000000] font-bold text-xl rounded-md px-8 flex items-center py-2 text-white  transition-all duration-300"
                >
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  className="bg-[#ffffff] text-[#111] border-2 border-[#42b9be] hover:bg-[#42b9be] hover:text-[#ffffff] font-bold text-xl  rounded-md px-8 flex items-center py-2 transition-all duration-300"
                >
                  Login
                </Link>
              </>
            ) : (
              <>
              </>
            )}
          </div>
            <FeaturedAuctions />
            <UpcomingAuctions />
        </div>

      </section>
    </>
  );
};

export default Home;
