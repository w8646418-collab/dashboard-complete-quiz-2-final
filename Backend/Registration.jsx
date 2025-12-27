import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { sanitizeInput } from "../utils/sanitizeInput";
import { isAlphabetOnly } from "../utils/isAlphabetOnly";
import { charLength } from "../utils/charLength";
import { regEmailTest } from "../utils/regEmailTest";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorOverallState, setErrorOverallState] = useState("");
  const [errorNameState, setErrorNameState] = useState("");
  const [errorEmailState, setErrorEmailState] = useState("");
  const [errorPassState, setErrorPassState] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setErrorOverallState("");
    setErrorNameState("");
    setErrorEmailState("");
    setErrorPassState("");

    let errorOverall = 1; 

    const nameField_get = sanitizeInput(form.name);
    const emailField_get = sanitizeInput(form.email);
    const passField_get = sanitizeInput(form.password);
    const rePassField_get = sanitizeInput(form.confirmPassword);

    if (nameField_get === "") {
      setErrorNameState("Please enter your name");
      errorOverall = 0;
    } else if (isAlphabetOnly(nameField_get) === 0) {
      setErrorNameState("Only alphabets are allowed");
      errorOverall = 0;
    } else if (charLength(nameField_get, 6, 35) === 0) {
      setErrorNameState("Name should be between 6 to 35 characters");
      errorOverall = 0;
    }

    if (emailField_get === "") {
      setErrorEmailState("Please enter your email");
      errorOverall = 0;
    } else if (regEmailTest(emailField_get) === 0) {
      setErrorEmailState("Invalid email format");
      errorOverall = 0;
    }

    if (passField_get === "") {
      setErrorPassState("Please enter password");
      errorOverall = 0;
    } else if (charLength(passField_get, 6, 35) === 0) {
      setErrorPassState("Password should be between 6 to 35 characters");
      errorOverall = 0;
    }

    if (passField_get !== rePassField_get) {
      setErrorPassState("Passwords do not match");
      errorOverall = 0;
    }

    if (errorOverall === 0) {
      setErrorOverallState("Please correct the highlighted errors.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameField_get,
          email: emailField_get,
          password: passField_get,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed!");
        setLoading(false);
        return;
      }

      alert("Registration successful! Please login now.");
      navigate("/login");
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 relative overflow-hidden mt-23">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* Register Card */}
      <div className="relative z-10 bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 w-[28rem] border border-purple-100 flex flex-col justify-center mt-20 mb-23">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-8 text-center">
          Register
        </h1>

        {errorOverallState && (
          <p className="text-center text-red-600 mb-4 font-semibold">
            {errorOverallState}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name
            </label>
            {errorNameState && <p className="text-red-600 text-sm mb-1">{errorNameState}</p>}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
              <span className="px-3 text-purple-600">
                <FaUser />
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            {errorEmailState && <p className="text-red-600 text-sm mb-1">{errorEmailState}</p>}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
              <span className="px-3 text-purple-600">
                <FaUser />
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            {errorPassState && <p className="text-red-600 text-sm mb-1">{errorPassState}</p>}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
              <span className="px-3 text-purple-600">
                <FaLock />
              </span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
              <span className="px-3 text-purple-600">
                <FaLock />
              </span>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                className="w-full p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-purple-800 hover:scale-105"
            } text-white py-3 rounded-lg font-semibold transition-transform shadow-md`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-purple-700 font-semibold cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
