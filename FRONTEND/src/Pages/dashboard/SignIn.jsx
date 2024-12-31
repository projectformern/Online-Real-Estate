import PasswordValidate from "../../Components/core/PasswordValidate";

const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 py-4">
      {/* Sign In Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sign In</h2>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6 border border-gray-400">
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="label-style">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input-style"
              required
            />
          </div>

          {/* Password Validation Component */}
          <PasswordValidate />

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a href="/forgot-password" className="text-sm text-black hover:underline">Forgot Password?</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-dark text-white font-medium rounded-md focus:outline-none focus:ring hover:ring focus:ring-offset-2 hover:ring-offset-2 hover:ring-black focus:ring-black"
          >
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-black font-medium hover:underline">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;