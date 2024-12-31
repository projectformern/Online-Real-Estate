import React from "react";

const DashContent = () => {
  return (
    <div className="bg-gray-200 w-full p-5 page-body flex-1 overflow-hidden overflow-y-auto">
      <div className="dashboard-atglance w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
        <div className="glance p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="lable text-sm font-semibold text-gray-500">Heading</div>
          <div className="glance-body flex items-center space-x-3 mt-3">
            <i className="ri-map-pin-user-line text-blue-500 text-3xl"></i>
            <h3 className="text-lg fo nt-bold text-gray-800">Total House</h3>
          </div>
        </div>
        <div className="glance p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="lable text-sm font-semibold text-gray-500">Heading</div>
          <div className="glance-body flex items-center space-x-3 mt-3">
            <i className="ri-map-pin-user-line text-green-500 text-3xl"></i>
            <h3 className="text-lg font-bold text-gray-800">Total House</h3>
          </div>
        </div>
        <div className="glance p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="lable text-sm font-semibold text-gray-500">Heading</div>
          <div className="glance-body flex items-center space-x-3 mt-3">
            <i className="ri-map-pin-user-line text-red-500 text-3xl"></i>
            <h3 className="text-lg font-bold text-gray-800">Total House</h3>
          </div>
        </div>
        <div className="glance p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="lable text-sm font-semibold text-gray-500">Heading</div>
          <div className="glance-body flex items-center space-x-3 mt-3">
            <i className="ri-map-pin-user-line text-purple-500 text-3xl"></i>
            <h3 className="text-lg font-bold text-gray-800">Total House</h3>
          </div>
        </div>
        <div className="glance p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="lable text-sm font-semibold text-gray-500">Heading</div>
          <div className="glance-body flex items-center space-x-3 mt-3">
            <i className="ri-map-pin-user-line text-blue-500 text-3xl"></i>
            <h3 className="text-lg fo nt-bold text-gray-800">Total House</h3>
          </div>
        </div>
        <div className="glance p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="lable text-sm font-semibold text-gray-500">Heading</div>
          <div className="glance-body flex items-center space-x-3 mt-3">
            <i className="ri-map-pin-user-line text-green-500 text-3xl"></i>
            <h3 className="text-lg font-bold text-gray-800">Total House</h3>
          </div>
        </div>
        <div className="glance p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="lable text-sm font-semibold text-gray-500">Heading</div>
          <div className="glance-body flex items-center space-x-3 mt-3">
            <i className="ri-map-pin-user-line text-red-500 text-3xl"></i>
            <h3 className="text-lg font-bold text-gray-800">Total House</h3>
          </div>
        </div>
        <div className="glance p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="lable text-sm font-semibold text-gray-500">Heading</div>
          <div className="glance-body flex items-center space-x-3 mt-3">
            <i className="ri-map-pin-user-line text-purple-500 text-3xl"></i>
            <h3 className="text-lg font-bold text-gray-800">Total House</h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashContent;
