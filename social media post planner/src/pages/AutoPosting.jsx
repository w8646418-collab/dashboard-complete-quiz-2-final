import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const NewSchedule = () => {
  const [scheduledPosts, setScheduledPosts] = useState([]);
  const [formData, setFormData] = useState({
    content: "",
    platforms: [],
    date: "",
    time: "",
  });
  const [editPostId, setEditPostId] = useState(null);
  const [loading, setLoading] = useState(false);

  const userEmail = localStorage.getItem("email");

  const fetchScheduledPosts = async () => {
    if (!userEmail) return;
    try {
      const res = await fetch(`http://localhost:5000/api/schedule/get_scheduledpost?email=${userEmail}`);
      const data = await res.json();
      if (data.success) setScheduledPosts(data.scheduledpost);
    } catch (err) {
      console.error("Error fetching scheduled posts:", err);
    }
  };

  useEffect(() => {
    fetchScheduledPosts();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handlePlatformChange = (platform) => {
    const updatedPlatforms = formData.platforms.includes(platform)
      ? formData.platforms.filter((p) => p !== platform)
      : [...formData.platforms, platform];
    setFormData({ ...formData, platforms: updatedPlatforms });
  };

  const resetForm = () => {
    setFormData({ content: "", platforms: [], date: "", time: "" });
    setEditPostId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEmail) {
      alert("Please login first!");
      return;
    }

    const { content, platforms, date, time } = formData;
    if (!content || platforms.length === 0 || !date || !time) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      let url = "http://localhost:5000/api/schedule/create_scheduled";
      let method = "POST";
      let body = { email: userEmail, content, platforms, date, time };

      if (editPostId !== null) {
        url = "http://localhost:5000/api/schedule/update_scheduledpost";
        method = "PUT";
        body.index = editPostId;
      }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        alert(editPostId !== null ? "Scheduled post updated!" : "Scheduled post added!");
        setScheduledPosts(data.scheduledpost);
        resetForm();
      } else {
        alert("" + data.message);
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Server error!");
    }
  };

  const handleDelete = async (index) => {
    if (!userEmail) return;
    if (!window.confirm("Are you sure you want to delete this scheduled post?")) return;

    try {
      const res = await fetch("http://localhost:5000/api/schedule/delete_scheduledpost", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, index }),
      });
      const data = await res.json();
      if (data.success) setScheduledPosts(data.scheduledpost);
      if (editPostId === index) resetForm();
    } catch (err) {
      console.error(err);
      alert("Server error!");
    }
  };

  const handleEdit = (index) => {
    const post = scheduledPosts[index];
    setFormData({ content: post.content, platforms: post.platforms, date: post.date, time: post.time });
    setEditPostId(index);
  };

  const scheduledCount = scheduledPosts.length;
  const totalPosts = scheduledPosts.length;
  const publishedToday = 0;

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">

      <div className="md:w-1/2 rounded-2xl">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl md:text-2xl font-bold text-purple-800 mb-8">
            {editPostId !== null ? "Edit Scheduled Post" : "Schedule New Post"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Post Content</label>
              <textarea
                rows={4}
                id="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Enter a post content..."
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platforms</label>
              <div className="flex flex-wrap gap-3">
                {["Facebook", "Instagram", "Twitter", "TikTok", "YouTube"].map((platform) => (
                  <label key={platform} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.platforms.includes(platform)}
                      onChange={() => handlePlatformChange(platform)}
                    />
                    {platform}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Schedule Date</label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Schedule Time</label>
              <input
                type="time"
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3.5 rounded-lg font-semibold hover:scale-105 transition-transform shadow-md"
            >
              {loading ? "Saving..." : editPostId !== null ? "Update Post" : "Schedule Post"}
            </button>

            {editPostId !== null && (
              <button
                type="button"
                onClick={resetForm}
                className="w-full mt-2 text-gray-500 border border-gray-300 py-3.5 rounded-lg font-semibold hover:bg-purple-200"
              >
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200 mt-4">
          <h2 className="text-xl font-semibold text-purple-700 mb-4">Schedule Stats</h2>
          <div className="space-y-2">
            <p className="text-gray-700">Scheduled Posts: <span className="font-bold text-purple-600 ml-2">{scheduledCount}</span></p>
            <p className="text-gray-700">Published Today: <span className="font-bold text-yellow-600 ml-2">{publishedToday}</span></p>
            <p className="text-gray-700">Total Posts: <span className="font-bold text-blue-600 ml-2">{totalPosts}</span></p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">

        <h2 className="text-xl font-semibold text-purple-800 mb-6">
          Scheduled Posts
        </h2>

        {scheduledPosts.length === 0 && (
          <p className="text-center text-gray-400 py-10">
            No posts scheduled
          </p>
        )}

        {scheduledPosts.length > 0 && (
          <div className="space-y-6">
            {scheduledPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm relative 
                     transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
              >

                <div className="absolute right-4 top-4 flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
                  >
                    <FaTrash />
                  </button>
                </div>

                <p className="text-gray-800 text-base mb-4 pr-20">
                  {post.content}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.platforms.map((platform, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-purple-100 text-purple-700 text-sm rounded-full font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-gray-600 text-sm mb-4">

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📅</span>
                      <span>{post.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-lg">⏰</span>
                      <span>{post.time}</span>
                    </div>
                  </div>

                  <span className="px-3 py-2 bg-purple-100 text-purple-800 text-sm rounded-full font-semibold">
                    {post.status}
                  </span>
                </div>
              
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default NewSchedule;
