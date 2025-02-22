import React, { useState } from "react";

function Login() {
  const [state, setState] = useState("Admin");

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">
          <span className="text-blue-500">{state}</span> Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium">Email</label>
          <input
            type="email"
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 font-medium">Password</label>
          <input
            type="password"
            required
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
