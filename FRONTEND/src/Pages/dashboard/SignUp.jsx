import React from "react";
import PasswordValidate from "../../Components/core/PasswordValidate";

const SignUp = () => {
  return (
    <div className="min-h-screen flex-col flex items-center justify-center bg-gray-100 py-1">
      {/* Agent Registration Title outside the card */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Agent Registration
      </h2>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 space-y-6 border border-gray-300">
        <form className="space-y-4">
          {/* Full Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="full-name" className="label-style">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                autoFocus={true}
                placeholder="Name of the agent"
                className="input-style"
                required
                aria-describedby="full-name-helper"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="label-style">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="To be used for verification and login"
                className="input-style"
                required
                aria-describedby="email-helper"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="label-style">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Useful for 2FA or communication"
                className="input-style"
                aria-describedby="phone-helper"
              />
            </div>

            {/* Company/Organization */}
            <div>
              <label htmlFor="organization" className="label-style">
                Company/Organization (Optional)
              </label>
              <input
                type="text"
                id="organization"
                placeholder="If you belong to a specific organization"
                className="input-style"
                aria-describedby="organization-helper"
              />
            </div>
          </div>

          {/* Password Validation */}
          <PasswordValidate />

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm-password" className="label-style">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Re-enter your password"
              className="input-style"
              required
              aria-describedby="confirm-password-helper"
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="label-style">
              Address (Optional)
            </label>
            <textarea
              id="address"
              placeholder="Enter your address"
              className="input-style"
              rows="3"
              aria-describedby="address-helper"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-dark text-white font-medium rounded-md focus:outline-none focus:ring hover:ring focus:ring-offset-2 hover:ring-offset-2 hover:ring-black focus:ring-black"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/sign-in"
            className="text-black font-medium hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
