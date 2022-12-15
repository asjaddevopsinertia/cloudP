import React from "react";

export default function Header() {
  return (
    <div className="h-[120px]">
      <div className="flex justify-between items-center py-6 px-6 bg-blue mb-10 fixed w-full shadow-[0_4px_2px_-2px_gray]">
        <div>
          <h1 className="text-[#fff] font-black text-[20px]">Logo</h1>
        </div>

        <div>
          <h1 className="text-[#fff] font-extrabold text-[18px]">Home</h1>
        </div>

        <div>
          <h3 className="text-[#fff]">Logout</h3>
        </div>
      </div>
    </div>
  );
}
