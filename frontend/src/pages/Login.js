import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { loginUser } from "../services/api";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle state
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await loginUser(data); // Login API
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed: " + error.response?.data?.message || "Error");
    }
  };

  const handleToggle = () => {
    setIsLogin(!isLogin); // Toggle between Login and Register
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      {isLogin ? (
        <>
          <AuthForm onSubmit={handleLogin} title="Login" />
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <button onClick={handleToggle} className="text-blue-500">
              Register here
            </button>
          </p>
        </>
      ) : (
        <>
          <AuthForm onSubmit={handleLogin} title="Register" />
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <button onClick={handleToggle} className="text-blue-500">
              Login here
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default Login;
