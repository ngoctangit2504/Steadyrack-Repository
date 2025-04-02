import React, { useState, useEffect } from "react";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const buttonClass = isValidEmail
    ? "w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
    : "w-full bg-gray-200 text-gray-600 py-2 px-4 rounded-md cursor-default";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <a href="https://www.steadyrack.com">
            <img
              alt="Steadyrack NA Logo"
              src="https://cdn.shopify.com/s/files/1/0855/2238/3133/files/Logo_300_x_80_px_1_200x60@2x.png?v=1741765575.webp"
              className="h-10"
            />
          </a>
        </div>
        <h2 className="text-2xl font-bold">Log in</h2>
        <p className="text-gray-500 mb-6">
          Enter your email and we'll send you a login code
        </p>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 placeholder:text-black"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button
            type="submit"
            className={buttonClass}
            disabled={!isValidEmail}
          >
            Continue
          </button>
        </form>
        <div className="mt-4">
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
