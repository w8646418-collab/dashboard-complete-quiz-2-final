import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const CreatePost = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    platform: "",
    createdat: "",
    caption: "",
    tags: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [loading, setLoading] = useState(false);


  const userEmail = localStorage.getItem("email");

  const fetchPosts = async () => {
    if (!userEmail) return;
    try {
      const res = await fetch(`http://localhost:5000/api/get_posts?email=${userEmail}`);
      const data = await res.json();
      if (data.success) setPosts(data.posts);
    } catch (err) {
      console.log("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEmail) {
      alert("Please login first!");
      return;
    }

    setLoading(true);
    try {
      let url = "http://localhost:5000/api/create_post";
      let method = "POST";
      let body = { ...formData, email: userEmail };

      if (editingIndex !== null) {
        url = "http://localhost:5000/api/update_post";
        method = "PUT";
        body.index = editingIndex;
      }

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        alert(editingIndex !== null ? "Post updated!" : "Post added!");
        setFormData({ title: "", platform: "", createdat: "", caption: "", tags: "" });
        setEditingIndex(null);
        setPosts(data.posts);
      } else {
        alert("" + data.message);
      }
    } catch (err) {
      setLoading(false);
      alert("Server error!");
    }
  };

  const handleDelete = async (index) => {
    if (!userEmail) return;
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const res = await fetch("http://localhost:5000/api/delete_post", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, index }),
      });
      const data = await res.json();
      if (data.success) setPosts(data.posts);
    } catch (err) {
      alert("Server error!");
    }
  };

  const handleEdit = (index) => {
    setFormData(posts[index]);
    setEditingIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      platform: "",
      createdat: "",
      caption: "",
      tags: "",
    });
    setEditingIndex(null);
  };

  return (
    <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-10">

      <div className="md:w-1/2 rounded-2xl">
        <div className=" bg-white shadow-lg rounded-2xl p-8">

          <h1 className="text-4xl md:text-2xl font-bold text-purple-800 mb-8 text-left flex  justify-left  gap-3">
            {editingIndex !== null ? "Edit Post" : "Create Post"}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Post Title</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter a Title"
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <textarea
                id="caption"
                value={formData.caption}
                onChange={handleChange}
                placeholder="Enter post content..."
                required
                rows={4}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tags / Mention</label>
              <input
                type="text"
                id="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="#Tags , @User"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />

            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
              <select
                id="platform"
                value={formData.platform}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              >
                <option value="">---Select---</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Twitter">Twitter</option>
                <option value="TikTok">TikTok</option>
                <option value="YouTube">YouTube</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Created At</label>
              <input
                type="datetime-local"
                id="createdat"
                value={formData.createdat}
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
              {loading ? "Saving..." : editingIndex !== null ? "Update Post" : "Create Post"}
            </button>

            {editingIndex !== null && (
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
      </div>

      <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">

        <h2 className="text-xl font-semibold text-purple-800 mb-6">
          Created Posts
        </h2>

        {posts.length === 0 && (
          <p className="text-center text-gray-400 py-10">
            No posts created
          </p>
        )}

        {posts.length > 0 && (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-300 shadow-sm 
                     flex flex-col md:flex-row justify-between items-start md:items-center gap-4
                     transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
              >

                <div>
                  <h2 className="text-lg font-semibold text-purple-800">{post.title}</h2>
                  <p className="text-gray-500 mt-1">Caption: {post.caption}</p>
                  <p className="text-gray-500 mt-1">Tags: {post.tags}</p>
                  <p className="text-gray-500 mt-1">Platform: {post.platform}</p>
                  <p className="text-gray-500 mt-1">
                    Created At: {new Date(post.createdat).toLocaleString()}
                  </p>
                </div>

                <div className="flex gap-3 mt-3 md:mt-0">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 transition"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default CreatePost;
