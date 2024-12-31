import React, { useState } from "react";

const PasswordValidate = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);

  const checkStrength = (password) => {
    let strengthLevel = 0;

    if (password.length >= 8) strengthLevel++; // Check length
    if (/[A-Z]/.test(password)) strengthLevel++; // Check for uppercase
    if (/[a-z]/.test(password)) strengthLevel++; // Check for lowercase
    if (/[0-9]/.test(password)) strengthLevel++; // Check for number
    if (/[^A-Za-z0-9]/.test(password)) strengthLevel++; // Check for special character
    setStrength(strengthLevel);
  };
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="password" className="label-style">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input-style"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            checkStrength(e.target.value);
          }}
        />
      </div>

      <div className="mb-4 flex space-x-2">
        <div className={`w-1/5 h-2 rounded-lg ${strength >= 1 ? 'bg-red-500' : 'bg-gray-300'}`}></div>
        <div className={`w-1/5 h-2 rounded-lg ${strength >= 2 ? 'bg-yellow-500' : 'bg-gray-300'}`}></div>
        <div className={`w-1/5 h-2 rounded-lg ${strength >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
        <div className={`w-1/5 h-2 rounded-lg ${strength >= 4 ? 'bg-green-600' : 'bg-gray-300'}`}></div>
      </div>
    </div>
  );
};

export default PasswordValidate;
