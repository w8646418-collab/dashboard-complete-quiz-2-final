import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PostFeatures() {
  const [showModal, setShowModal] = useState(false);
  const [caption, setCaption] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [posts, setPosts] = useState([]);

  const getStatus = (post) => {
    const postTime = new Date(`${post.date}T${post.time}`);
    return postTime < new Date() ? "Done" : "Upcoming";
  };

  const handleSchedule = (e) => {
    e.preventDefault();
    if (caption && date && time) {
      const newPost = { id: Date.now(), caption, date, time };
      setPosts((prev) => [...prev, newPost]);
      setShowModal(false);
      setCaption("");
      setDate("");
      setTime("");
    }
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPosts((prev) => [...prev]);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    setAnalytics([
      { id: 1, title: "Instagram", likes: 820, comments: 140, reach: 2300 },
      { id: 2, title: "Twitter", likes: 520, comments: 75, reach: 1800 },
      { id: 3, title: "Facebook", likes: 670, comments: 98, reach: 2100 },
    ]);
  }, []);

  return (
    <>
 {/* FEATURE 1: Post Scheduling */}
<section className="relative py-24 px-8 bg-gradient-to-br from-[#f7f3ff] to-[#d0badd] overflow-hidden mt-23">
  {/* Background gradient orbs */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute w-64 h-64 bg-[#b026ff]/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
    <div className="absolute w-72 h-72 bg-[#ff8fe6]/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
  </div>

  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-5xl font-extrabold text-[#3b006b]">
      Schedule Smarter, <br />
      <span className="text-[#efac02]">Not Harder</span>
    </h2>
    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
      Plan posts visually, track progress, and stay consistent — even when
      you’re offline.
    </p>
  </div>

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
    {/* Timeline */}
    <div className="flex flex-col gap-10 w-full md:w-1/2 relative">
      <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#b026ff] to-[#ff8fe6]"></div>

      {["Draft your post", "Pick your time", "Confirm schedule"].map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          className="flex items-start gap-4"
        >
          <div className="flex-shrink-0 w-6 h-6 bg-[#9858d3] rounded-full relative z-10 mt-1"></div>
          <div>
            <h4 className="text-lg font-semibold text-[#4b008f]">{step}</h4>
            <p className="text-gray-600 text-sm mt-1">
              {i === 0
                ? "Write engaging captions and upload media easily."
                : i === 1
                ? "Select the perfect date & time that suits your audience."
                : "Review and confirm your post to finalize scheduling."}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full md:w-1/2 relative flex justify-center"
    >
      {/* Main dashboard card */}
      <div className="bg-white rounded-3xl shadow-2xl border border-[#f0e5ff] p-6 w-[90%] md:w-[420px] relative overflow-hidden">
        <div className="absolute -top-10 -right-10 bg-gradient-to-tr from-[#b026ff] to-[#ff8fe6] rounded-full w-24 h-24 blur-xl opacity-50"></div>
        <div className="absolute -bottom-6 -left-6 bg-gradient-to-tr from-[#ff8fe6] to-[#b026ff] rounded-full w-24 h-24 blur-xl opacity-40"></div>

        <h3 className="text-xl font-bold text-[#3b006b] mb-4">
          Visual Scheduler Preview
        </h3>

        {/* Mockup grid */}
        <div className="grid grid-cols-2 gap-3">
          {[
            "/images/workone.jpg",
            "/images/worktwo.jpg",
            "/images/workthree.jpg",
            "/images/workfour.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-[#f0e5ff] shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
            >
              <img
                src={src}
                alt="scheduler preview"
                className="w-full h-28 object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-xs text-center mt-4">
          Preview your content flow at a glance.
        </p>
      </div>

      {/* Floating post cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute -top-10 right-0 bg-white rounded-2xl shadow-xl border border-[#f3eaff] w-32 p-2"
      >
        <img
          src="https://cdn.dribbble.com/userupload/12905803/file/original-af45e3cb6298795bbb1667e1e4145c6e.jpg?resize=800x"
          alt="floating post"
          className="rounded-xl w-full h-20 object-cover"
        />
      </motion.div>
    </motion.div>
  </div>
</section>

  
{/* FEATURE 2: Post Analytics */}
<section className="relative py-24 px-8 bg-gradient-to-br from-[#ffffff] to-[#f2f1f3] overflow-hidden">
  {/* Background accents */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute w-72 h-72 bg-[#b026ff]/20 blur-3xl top-10 left-20"></div>
    <div className="absolute w-72 h-72 bg-[#ff8fe6]/20 blur-3xl bottom-10 right-20"></div>
  </div>

  {/* Header */}
  <div className="text-center mb-16">
    <h2 className="text-5xl font-extrabold text-[#3b006b] mb-4">
      Post <span className="text-[#efac02]">Analytics</span>
    </h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Track how your posts perform across platforms and understand your audience better.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {analytics.map((item) => (
      <motion.div
        key={item.id}
        whileHover={{ y: -5 }}
        className="bg-white border border-[#f0e5ff] rounded-3xl p-8 shadow-md hover:shadow-lg transition"
      >
        <h3 className="text-xl font-bold text-[#3b006b] mb-3">{item.title}</h3>

        <div className="space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Likes</span>
            <span>{item.likes}</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${Math.min((item.likes / 1000) * 100, 100)}%`,
              }}
              transition={{ duration: 0.6 }}
              className="h-2 bg-[#b026ff] rounded-full"
            ></motion.div>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span>Comments</span>
            <span>{item.comments}</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${Math.min((item.comments / 200) * 100, 100)}%`,
              }}
              transition={{ duration: 0.6 }}
              className="h-2 bg-[#ff8fe6] rounded-full"
            ></motion.div>
          </div>

          <div className="flex justify-between text-sm text-gray-600">
            <span>Reach</span>
            <span>{item.reach}</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${Math.min((item.reach / 3000) * 100, 100)}%`,
              }}
              transition={{ duration: 0.6 }}
              className="h-2 bg-[#3b006b] rounded-full"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Footer Summary */}
  <div className="text-center mt-16">
    <p className="text-gray-600">
      📈 Total Reach:{" "}
      <span className="font-semibold text-[#b026ff]">
        {analytics.reduce((a, b) => a + b.reach, 0).toLocaleString()}
      </span>{" "}
      across all platforms
    </p>
  </div>
</section>
{/* FEATURE: Visualize Your Workflow */}
<section className="py-24 px-8 bg-gradient-to-br from-[#d5cbe9] to-[#d5cbe9]  overflow-hidden">
  <div className="text-center mb-16">
    <h2 className="text-5xl font-extrabold text-[#efac02] mb-4">
      Visualize Your <span className="text-[#3b006b]">Workflow</span>
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Explore how our scheduling platform brings clarity, simplicity, and beauty to your daily posting routine.
    </p>
  </div>

  {/* Staggered Gallery Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { id: 1, title: "Plan Your Week", img: "/images/plan.jpg" },
      { id: 2, title: "Drag & Drop Posts", img: "/images/dragdrop.jpg" },
      { id: 3, title: "Preview Calendar", img: "/images/calender.jpg" },
      { id: 4, title: "Analytics Dashboard", img: "/images/dashboard.jpg" },
      { id: 5, title: "AI Caption Assistant", img: "/images/Ai Icon.jpg" },
      { id: 6, title: "Team Collaboration", img: "/images/team.jpg" },
    ].map((item, i) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1, duration: 0.4 }}
        whileHover={{ scale: 1.04 }}
        className="relative rounded-3xl overflow-hidden shadow-lg group"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3b006b]/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Caption */}
        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h4 className="text-lg font-semibold">{item.title}</h4>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Bottom Accent */}
  <div className="mt-16 text-center">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-gray-500 text-sm"
    >
      Each feature is designed to make your workflow smoother, faster, and more enjoyable. 🌈
    </motion.p>
  </div>
</section>

{/* FEATURE 4: Creator Flow Studio */}
<section className="relative py-28 px-8 bg-gradient-to-br from-[#f8f5ff] to-[#ffffff] overflow-hidden">
  {/* Glowing background accents */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute w-80 h-80 bg-[#b026ff]/20 blur-3xl top-10 left-20 animate-pulse"></div>
    <div className="absolute w-96 h-96 bg-[#ff8fe6]/20 blur-3xl bottom-10 right-10 animate-pulse"></div>
  </div>

  {/* Header */}
  <div className="text-center mb-16">
    <h2 className="text-5xl font-extrabold text-[#3b006b] mb-4">
      Creator <span className="text-[#efac02]">Flow Studio</span>
    </h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Watch your ideas, inspiration, and data move together in harmony — a real-time creative rhythm.
    </p>
  </div>

  {/* Animated Flow Line */}
  <div className="relative max-w-7xl mx-auto overflow-x-hidden py-8">
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="flex gap-12 whitespace-nowrap items-center"
    >
      {[
        { icon: "🎨", text: "Design Energy" },
        { icon: "💡", text: "Smart Ideas" },
        { icon: "📊", text: "Deep Insights" },
        { icon: "🤝", text: "Collaboration" },
        { icon: "⚡", text: "Instant Impact" },
        { icon: "🧠", text: "Creative Strategy" },
        { icon: "🎬", text: "Content Flow" },
        { icon: "🚀", text: "Momentum Boost" },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.15, rotate: 2 }}
          className="flex flex-col items-center justify-center bg-white/50 backdrop-blur-xl border border-[#f0e5ff] rounded-3xl shadow-md px-6 py-4 min-w-[180px] hover:shadow-lg transition"
        >
          <span className="text-4xl mb-2">{item.icon}</span>
          <span className="text-[#3b006b] font-semibold">{item.text}</span>
        </motion.div>
      ))}
    </motion.div>
  </div>
  {/* Connected Reflection Zone */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="relative mt-24 max-w-5xl mx-auto bg-gradient-to-br from-[#ffffff]/60 to-[#f8f5ff]/40 border border-[#f0e5ff] shadow-lg rounded-3xl p-12 text-center backdrop-blur-md"
  >
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-[#b026ff] to-[#ff8fe6] rounded-full w-20 h-20 blur-xl opacity-50"></div>
    <h3 className="text-2xl font-bold text-[#3b006b] mb-4">
      When Data Meets Imagination 🌟
    </h3>
    <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
      Every post, metric, and creative spark connects in motion — shaping your content universe organically.  
      <br />  
      You don’t just plan. You create momentum.
    </p>
    <div className="mt-8 flex justify-center gap-8 text-[#b026ff] text-sm font-medium">
      <motion.span whileHover={{ scale: 1.1 }}>✨ Real-Time Flow</motion.span>
      <motion.span whileHover={{ scale: 1.1 }}>💬 Audience Pulse</motion.span>
      <motion.span whileHover={{ scale: 1.1 }}>🎯 Vision Alignment</motion.span>
    </div>
  </motion.div>
</section>

{/* FEATURE: Dynamic Campaign Showcase */}
<section className="relative py-28 px-8 bg-gradient-to-br from-[#cfc0ec] to-[#ffffff] overflow-hidden">
  {/* Soft animated background glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute w-72 h-72 bg-[#b026ff]/15 blur-3xl top-16 left-20 animate-pulse"></div>
    <div className="absolute w-80 h-80 bg-[#ff8fe6]/15 blur-3xl bottom-20 right-20 animate-pulse"></div>
  </div>

  {/* Header */}
  <div className="text-center mb-20">
    <h2 className="text-5xl font-extrabold text-[#efac02] mb-4">
      Bring Campaigns <span className=" text-[#3b006b] ">to Life</span>
    </h2>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Experience how visuals, ideas, and moments connect — turning content into stories that captivate.
    </p>
  </div>

  {/* Staggered flowing collage */}
  <div className="relative max-w-7xl mx-auto flex flex-col gap-10 items-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* Left column */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/images/cone.jpg"
            alt="Creative Planning"
            className="object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/images/ctwo.jpg"
            alt="Scheduling Preview"
            className="object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="relative"
      >
        <div className="rounded-[2rem] overflow-hidden shadow-xl border border-[#f0e5ff]">
          <img
            src="/images/cthree.jpg"
            alt="Campaign Spotlight"
            className="object-cover w-full h-[520px] hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#3b006b]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-6 left-21 text-[#3b006b] font-semibold text-lg drop-shadow-md"
        >
          “Moments that Move People”
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="space-y-6"
      >
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/images/cfour.jpg"
            alt="Insights Snapshot"
            className="object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/images/team.jpg"
            alt="Collaboration"
            className="object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>
    </div>
  </div>

  {/* Tagline */}
  <motion.p
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="text-center text-gray-600 mt-16 text-sm"
  >
    Every frame tells a story — designed, scheduled, and shared beautifully. 🎥
  </motion.p>
</section>

{/* FEATURE: Creator’s Mindspace */}
<section className="relative py-28 px-8 bg-gradient-to-br from-[#ffffff] to-purple-100 overflow-hidden">

  <div className="absolute inset-0 -z-10">
    <div className="absolute w-96 h-96 bg-[#b026ff]/10 blur-3xl top-0 left-10 animate-pulse"></div>
    <div className="absolute w-96 h-96 bg-[#ff8fe6]/10 blur-3xl bottom-0 right-10 animate-pulse"></div>
  </div>

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-16">
    {/* Left text block */}
    <div className="w-full md:w-1/3">
      <h2 className="text-5xl font-extrabold text-[#3b006b] leading-tight">
        Creator’s <span className="text-[#efac02]">Mindspace</span>
      </h2>
      <p className="text-gray-600 mt-4 text-lg">
        A quiet space where your next big idea takes form — blending clarity, flow, and innovation.
      </p>
    </div>

    {/* Floating idea bubbles */}
    <div className="relative w-full md:w-2/3 flex flex-wrap justify-center gap-6">
      {[
        "💭 Creative Vision",
        "🌍 Global Reach",
        "🎨 Visual Harmony",
        "⚡ Focus Energy",
        "🪶 Smooth Workflow",
        "🔮 Intuitive Design",
      ].map((idea, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          whileHover={{ scale: 1.1 }}
          className="px-6 py-4 rounded-full bg-white/70 backdrop-blur-xl shadow-md border border-[#f0e5ff] text-[#3b006b] font-medium cursor-default hover:shadow-lg transition-all"
        >
          {idea}
        </motion.div>
      ))}
    </div>
  </div>

  {/* Subtle closing line */}
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-center text-gray-500 mt-20 text-sm"
  >
    Grounded. Inspired. Ready to create your next moment. 💜
  </motion.p>
</section>

    </>
    
  );
}
