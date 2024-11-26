import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/userSlice";
import { Link } from "react-router-dom";

const SideDrawer = () => {
  const [show, setShow] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="fixed right-5 top-5 bg-[#42b9be] text-white p-2 rounded-md hover:bg-[#ffffff] lg:hidden"
      >
        <GiHamburgerMenu />
      </div>
      <div
        className={`w-[100%] sm:w-[230px] bg-[#4a4d56] shadow-md h-full fixed top-0 ${
          show ? "left-0" : "left-[-100%]"
        } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`} 
      >
        <div className="relative">
          <Link to={"/"}>
            <h3 className="text-2xl text-[#ffffff] font-bold mb-4">
              Auction<span className="text-[#42b9be]"> Plateform</span>
            </h3>
          </Link>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to={"/auctions"}
                className="flex text-[#ffffff] gap-2 items-center hover:text-[#42b9be] hover:transition-all hover:duration-150"
              >
                Auctions
              </Link>
            </li>
            <li>
              <Link
                to={"/leaderboard"}
                className="flex text-[#ffffff] gap-2 items-center hover:text-[#42b9be] hover:transition-all hover:duration-150"
              >
                Leaderboard
              </Link>
            </li>
            {isAuthenticated && user && user.role === "Auctioneer" && (
              <>
                <li>
                  <Link
                    to={"/submit-commission"}
                    className="flex text-[#ffffff] items-center hover:text-[#42b9be] hover:transition-all hover:duration-150"
                  >
                    Submit Commission
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/create-auction"}
                    className="flex text-[#ffffff] items-center hover:text-[#42b9be] hover:transition-all hover:duration-150"
                  >
                    Create Auction
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/view-my-auctions"}
                    className="flex text-[#ffffff] items-center hover:text-[#42b9be] hover:transition-all hover:duration-150"
                  >
                    View My Auctions
                  </Link>
                </li>
              </>
            )}
            {isAuthenticated && user && user.role === "Super Admin" && (
              <li>
                <Link
                  to={"/dashboard"}
                  className="flex text-[#ffffff] items-center hover:text-[#42b9be] hover:transition-all hover:duration-150"
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
          {!isAuthenticated ? (
            <>
              <div className="my-4 flex gap-2">
                <Link
                  to={"/sign-up"}
                  className="flex text-[#ffffff] gap-2 items-center hover:text-[#42b9be] hover:transition-all hover:duration-150"
                >
                  Register
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="my-4 flex gap-4 w-fit" onClick={handleLogout}>
                <button className="bg-[#42b9be] font-semibold hover:bg-[#ffffff] py-1 px-4 rounded-md text-white">
                  Logout
                </button>
              </div>
            </>
          )}
          <ul className="flex flex-col gap-3">
            {isAuthenticated && (
              <li>
                <Link
                  to={"/me"}
                  className="flex text-[#ffffff] gap-2 items-center hover:text-[#42b9be] hover:transition-all hover:duration-150"
                >
                  <FaUserCircle /> Profile
                </Link>
              </li>
            )}
            <li>
              <Link
                to={"/about"}
                className="flex text-[#ffffff] gap-2 items-center hover:text-[#42b9be] hover:transition-all hover:duration-150"
              >
                About Us
              </Link>
            </li>
          </ul>
          <IoMdCloseCircleOutline
            onClick={() => setShow(!show)}
            className="absolute top-0 right-4 text-[28px] sm:hidden"
          />
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
