import React, { useState, useEffect } from "react";
import PostCreator from "./CreatePost";
import HashtagGenerator from "./HashtagPlanner";
import AutoPosting from "./AutoPosting";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("create");

  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  const getDataFromApi = async (token) => {
    let myEndpoint = "http://localhost:5000/api/get_profile";

    try {
      let dataFetched = await fetch(myEndpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!dataFetched.ok) throw new Error("Failed to fetch data");

      let parsedData = await dataFetched.json();

      if (parsedData.message !== "OK") {
        alert("Session expired. Login again!");
        window.location.replace("/login/");
        return;
      }

      setUserEmail(parsedData.userData.email);
      setUserName(parsedData.userData.name);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      alert("Please login first!");
      window.location.replace("/login/");
    } else {
      getDataFromApi(token);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    alert("Logged out successfully!");
    window.location.replace("/login/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-purple-100 via-purple-100 to-purple-100 mt-23 pb-15 ">

      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 mb-8">
        <h1 className="text-4xl text-purple-900 font-bold">
          Welcome {userName ? `, ${userName}` : ""}
        </h1>

        <button
          onClick={handleLogout}
          className="bg-yellow-500 text-white px-6 py-3 rounded-xl mt-4 md:mt-0 font-semibold hover:bg-yellow-600 transition hover: cursor-pointer"
        >
          Logout
        </button>
      </div>

      <div className="bg-white p-2 rounded-xl max-w-7xl mx-auto grid grid-cols-3 gap-4 mb-8">

        <button
          onClick={() => setActiveTab("create")}
          className={`
      py-3 rounded-xl font-semibold w-full
      transition-all duration-200 hover: cursor-pointer
      ${activeTab === "create"
              ? "bg-purple-800 text-white shadow-md"
              : "bg-white text-gray-700 "}
    `}
        >
          ✏️ Create Post
        </button>

        <button
          onClick={() => setActiveTab("hashtags")}
          className={`
      py-3 rounded-xl font-semibold w-full
      transition-all duration-200 hover: cursor-pointer
      ${activeTab === "hashtags"
              ? "bg-purple-800 text-white shadow-md"
              : "bg-white text-gray-700"}
    `}
        >
          #️⃣ Hashtags
        </button>

        <button
          onClick={() => setActiveTab("schedule")}
          className={`
      py-3 rounded-xl font-semibold w-full
      transition-all duration-200 hover: cursor-pointer
      ${activeTab === "schedule"
              ? "bg-purple-800 text-white shadow-md"
              : "bg-white text-gray-700"}
    `}
        >
          🗓️ Auto Posting
        </button>

      </div>

      <div className="text-gray-800 rounded-xl max-w-7xl mx-auto">

        {activeTab === "create" && <PostCreator />}

        {activeTab === "hashtags" && <HashtagGenerator />}

        {activeTab === "schedule" && <AutoPosting />}

      </div>

    </div>
  );
}
