import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/reducers/users/userSlice";

export const Header = ({ title, login }) => {

  const clearLocalData = () => {
    dispatch(logout())
    localStorage.clear()
  }
  const dispatch = useDispatch();

  return (
    <div className="h-[120px]">
      <div className="flex justify-between items-center px-2 py-5 sm:px-6  bg-[#59164E] mb-10 fixed w-full shadow-[0_4px_2px_-2px_gray] z-[99999]">
        <div className="flex-1">
          <h1 className="text-[#fff] font-black sm:text-[20px] text-[18px]"><Link to='/home'>Logo</Link></h1>
        </div>

        <div className="flex-1">
          <h1 className="text-[#fff] font-bold sm:text-[24px] text-center text-[20px]">{title}</h1>
        </div>
        {login ? (
          <div className="flex-1">
            <h3 className="text-[#fff] text-right cursor-pointer" onClick={clearLocalData}>
              Logout
            </h3>
          </div>
        ) : (
          <div className="flex-1"></div>
        )}
      </div>
    </div>
  );
};
