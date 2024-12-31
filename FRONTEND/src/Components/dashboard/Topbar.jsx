import React from "react";

const Topbar = () => {
  return (
    <>
      <header className="w-full h-14 py-3 border-b border-gray-400 flex justify-between items-center px-2">
        <div className="toggle-bar">
          <button className="h-10 w-10 bg-gray-300 text-2xl rounded"><i className="ri-menu-4-fill"></i></button>
          <button className="h-10 w-10 bg-gray-300 text-2xl rounded"><i className="ri-xrp-line"></i></button>
        </div>
        <div className="profile flex items-center space-x-2">
          <button className="profile-img h-10 w-10 bg-gray-300 text-2xl rounded">
            <i className="ri-user-3-line"></i> 
          </button>
          <p>Super Admin</p>
        </div>
      </header>
    </>
  );
};

export default Topbar;
