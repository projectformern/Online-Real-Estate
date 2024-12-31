import React, { useCallback, useEffect, useState } from "react";

const SignUp = ({ isAnimating, onClose, onSwitchToSignIn }) => {
  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    cfmPassword: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }, [formData]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, role: role });
    console.info(formData);
    // Add your sign-up logic here
  };

  const handleError = () => {
    console.log("Testing..");
  }

  return (
    <div className={`bg-white rounded-2xl shadow-lg max-w-2xl w-full relative ${isAnimating ? 'close' : 'open'}`}>
      {/* Header */}
      <div className="p-6 py-3 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-dark">Create Account</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Role Selection */}
      <div className="p-2 border-b border-gray-200 bg-gray-50">
        <div className="grid grid-cols-3 gap-2">
          {["user", "seller", "agent"].map((roleType) => (
            <button
              key={roleType}
              onClick={() => setRole(roleType)}
              className={`p-4  border-2 hover:border-dark flex flex-col items-center gap-2 rounded-lg transition-all
                ${role === roleType
                  ? "bg-dark text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"}`}
            >
              <i className={`ri-${roleType === "user" ? "user" :
                roleType === "seller" ? "building-2" : "user-settings"
                }-fill text-2xl`}></i>
              <span className="capitalize">{roleType}</span>
            </button>
          ))}
        </div>
      </div>

      {/* <div className="px-6 py-2 flex justify-center border-b border-gray-200">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer overflow-hidden hover:border-dark transition-colors">
            <div className="flex flex-col items-center text-gray-500">
              <i className="ri-camera-line text-3xl mb-2"></i>
              <span className="text-sm">Add Photo</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <span className="text-white text-sm">Change Photo</span>
          </div>
        </div>
      </div> */}



      {/* Form */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Basic Fields */}
            <div className="fullName">
              <FormInput
                label="Full Name"
                name="fullName"
                type="text"
                icon="user"
                value={formData.fullName}
                onChange={handleChange}
                onFocus={handleError}
                required
              />
              <FormError message={"Error Please Fill the field"} />
            </div>

            <FormInput
              label="Email Address"
              name="email"
              type="email"
              icon="mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              icon="lock"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Confirm Password"
              type="password"
              name="cfmPassword"
              icon="lock"
              value={formData.cfmPassword}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              icon="phone"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Address"
              type="text"
              name="address"
              icon="map-pin"
              value={formData.address}
              onChange={handleChange}
              required
            />

            {/* Conditional Fields */}
            {/* {(role === "agent" || role === "seller") && (
              <FormInput
                label="Company Name"
                type="text"
                icon="building"
                required
              />
            )}
            {role === "agent" && (
              <FormInput
                label="License Number"
                type="text"
                icon="file-list-3"
                required
              />
            )} */}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 tracking-wide bg-dark text-white rounded-md focus:outline-none focus:ring hover:ring-2 focus:ring-offset-2 hover:ring-offset-2 hover:ring-black focus:ring-black"
          >
            <i className="ri-user-add-line"></i>
            Create Account
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={onSwitchToSignIn}
            className="text-dark font-medium hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

// Reusable Form Input Component
const FormInput = ({ label, type, icon, required, value, onChange, onFocus, name }) => (
  <div>
    <label className="block text-sm font-description font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <span className="absolute inset-y-0 left-0  pl-3 flex items-center text-gray-500">
        <i className={`ri-${icon}-line`}></i>
      </span>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onFocus}
        required={required}
        className="w-full font-description pl-10 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-dark focus:border-dark focus:ring-offset-2 transition-shadow"
      />
    </div>
  </div>
);

const FormError = ({ message }) => (
  <p className="text-red-500">{message}</p>
);

export default SignUp;