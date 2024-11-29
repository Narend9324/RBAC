import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { registerUser } from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      await registerUser(data); // Correct function for registration
      alert("Registration successful!");
      navigate("/login"); // Navigate to login after successful registration
    } catch (error) {
      alert("Registration failed: " + error.response?.data?.message || "Error");
    }
  };

  return <AuthForm onSubmit={handleRegister} title="Register" />;
};

export default Register;
