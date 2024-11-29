import axios from "axios";

// Create an Axios instance with the base URL set for the backend API
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Register a new user
export const registerUser = async (data) => {
  try {
    const response = await API.post("/auth/register", data);
    return response.data; // You can return the response data here
  } catch (error) {
    console.error("Error registering user:", error);
    throw error; // Rethrow or handle the error as needed
  }
};

// Login user
export const loginUser = async (data) => {
  try {
    const response = await API.post("/auth/login", data);
    return response.data; // You can return the response data here (e.g., JWT token)
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error; // Rethrow or handle the error as needed
  }
};

// Fetch a protected resource with JWT token
export const getResource = async (endpoint, token) => {
  try {
    const response = await API.get(`/resource/${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Returning the data from the protected resource
  } catch (error) {
    console.error("Error fetching resource:", error);
    throw error; // Rethrow or handle the error as needed
  }
};
