import React, { useState } from "react";
import { getResource } from "../services/api";

const Dashboard = () => {
  const [content, setContent] = useState(null);
  const token = localStorage.getItem("token");

  const fetchResource = async (endpoint) => {
    try {
      const response = await getResource(endpoint, token);
      setContent(response.data.message);
    } catch (error) {
      alert("Access denied or error fetching resource.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-4">
        <button
          onClick={() => fetchResource("admin")}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Admin Resource
        </button>
        <button
          onClick={() => fetchResource("moderator")}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Moderator Resource
        </button>
        <button
          onClick={() => fetchResource("user")}
          className="bg-yellow-500 text-black px-4 py-2 rounded"
        >
          User Resource
        </button>
      </div>
      {content && <p className="p-4 border rounded bg-gray-100">{content}</p>}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
