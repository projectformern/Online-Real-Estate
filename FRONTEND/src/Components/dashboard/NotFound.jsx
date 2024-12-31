import React from "react";
import PageNotFound from "../../assets/NotFoundPage.svg";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Illustration Placeholder */}
      <div className="h-auto w-[40rem] flex items-center justify-center mb-8">
        <img src={PageNotFound} alt="Page Not Found." className="object-contain" />
      </div>
    </div>
  );
};

export default NotFound;
