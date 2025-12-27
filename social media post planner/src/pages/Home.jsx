import { Link } from "react-router-dom";
import FeatureHomeCard from "../components/FeatureHomeCard";
import CtaCard from "../components/CtaCard";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-100 text-gray-800">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#5c2484] mb-6">
            Everything You Need to Grow Your Brand
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-16">
            Intuitive tools that help you manage content, analyze performance,
            and stay consistent across every platform.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureHomeCard
              icon={
                <svg
                  className="w-8 h-8 text-[#7a00cc]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              }
              title="Post Scheduling"
              description="Plan and publish your posts at the perfect time to boost engagement."
            />

            <FeatureHomeCard
              icon={
                <svg
                  className="w-8 h-8 text-[#7a00cc]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              }
              title="Hashtag Planner"
              description="Find the right hashtags to amplify your reach and connect with your audience."
            />

            <FeatureHomeCard
              icon={
                <svg
                  className="w-8 h-8 text-[#7a00cc]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              title="Automatic Posting"
              description="Automate your social strategy and let the system post for you effortlessly."
            />
          </div>
        </div>
      </section>
    {/* Calender */}
  <section className="relative bg-gradient-to-b from-purple-200 via-white to-purple-200 py-24 overflow-hidden">
  {/* Soft floating abstract shapes for style */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-200/20 rounded-full filter blur-3xl animate-pulse-slow"></div>

  <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12">
    {/* Stats & Timeline panel */}
    <div className="lg:w-1/2 flex flex-col gap-8">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4 text-center lg:text-left">
        Manage Your Content Effortlessly
      </h2>
      <p className="text-gray-600 text-center lg:text-left">
        Track your campaigns, upcoming posts, and overall social activity in one smooth, interactive dashboard.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {[
          { num: 12, label: "Scheduled", color: "#7a00cc" },
          { num: 8, label: "Completed", color: "#3a005a" },
          { num: 3, label: "Pending", color: "#ff5da2" },
          { num: 2, label: "Collaborations", color: "#34d399" },
        ].map((item, i) => (
          <div key={i} className="relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <div className="text-3xl font-bold" style={{ color: item.color }}>{item.num}</div>
            <div className="text-gray-500 mt-1">{item.label}</div>
            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 rounded-full border-dashed" style={{ borderColor: item.color + "50" }}></div>
          </div>
        ))}
      </div>

      {/* Upcoming Posts Timeline */}
      <div className="mt-8 bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-lg">
        <h3 className="font-semibold text-gray-800 mb-4">Upcoming Posts</h3>
        <div className="flex flex-col gap-4">
          {[
            { title: "Launch Reel", date: "Oct 21", platform: "Instagram", type: "Reel", color: "#7a00cc" },
            { title: "Collab Video", date: "Oct 25", platform: "TikTok", type: "Collab", color: "#ff5da2" },
            { title: "Blog Snippet", date: "Oct 30", platform: "LinkedIn", type: "Post", color: "#34d399" },
          ].map((post, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/30 transition">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: post.color }}></span>
                <div>
                  <h4 className="font-semibold text-gray-800">{post.title}</h4>
                  <p className="text-sm text-gray-500">{post.date} • {post.platform}</p>
                </div>
              </div>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full" style={{ backgroundColor: post.color, color: "#fff" }}>{post.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Calendar panel */}
    <div className="lg:w-1/2 relative">
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">October 2025</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition">Prev</button>
            <button className="px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 transition">Next</button>
          </div>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-500 mb-3">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => <div key={d}>{d}</div>)}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 31 }, (_, i) => i + 1).map(day => {
            const today = new Date().getDate();
            const isToday = day === today;
            const events = [
              { day: 7, type: "Reel", color: "#7a00cc" },
              { day: 21, type: "Collab", color: "#ff5da2" },
              { day: 30, type: "Post", color: "#34d399" },
            ].filter(e => e.day === day);

            return (
              <div key={day} className={`group relative p-4 rounded-xl cursor-pointer text-center transition-transform ${isToday ? "bg-yellow-300 animate-pulse" : "bg-white/30 hover:bg-white/50"}`}>
                <div className="font-semibold text-gray-800">{day}</div>
                <div className="flex flex-col items-center gap-1 mt-1">
                  {events.map((e,i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] font-semibold rounded-full" style={{ backgroundColor: e.color, color: "#fff" }}>{e.type}</span>
                  ))}
                </div>
                {/* Hover preview */}
                <div className="absolute top-0 left-full ml-2 w-44 p-3 bg-white/90 text-gray-800 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-xs">
                  {events.length > 0 ? events.map((e,i) => <p key={i}>{e.type} scheduled</p>) : <p className="text-gray-500">No posts</p>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-600">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#7a00cc]"></span> Reel</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#ff5da2]"></span> Collab</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#34d399]"></span> Post</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-yellow-300"></span> Today</span>
        </div>
      </div>
    </div>
  </div>
</section>
 
{/* Seamless About Section */}
<section className="relative py-24 bg-gradient-to-b from-white via-purple-50/40 to-white overflow-hidden">
  {/* soft purple glow accents */}
  <div className="absolute -top-20 -left-32 w-80 h-80 bg-[#5c2484]/10 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/10 blur-3xl rounded-full"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">
    {/* Intro line */}
    <p className="text-sm uppercase tracking-widest text-[#5c2484]/70 mb-4">
      Crafted with Vision
    </p>

    {/* Main heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-[#5c2484] leading-tight mb-6">
      Designing a Smarter Way for Brands to Grow
    </h2>

    <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed mb-16">
      We blend creativity, data, and technology to help brands evolve in the digital age — 
      building stories that connect and experiences that last.  
      Our mission is simple: make growth effortless, authentic, and beautifully human.
    </p>

    {/* floating info row */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="flex-1 border-l-4 border-[#5c2484] pl-6 text-left">
        <h3 className="text-xl font-semibold text-[#5c2484] mb-2">Who We Are</h3>
        <p className="text-gray-700 leading-relaxed">
          A collective of creators, engineers, and thinkers reimagining what digital identity can be.
        </p>
      </div>

      <div className="flex-1 border-l-4 border-[#5c2484] pl-6 text-left">
        <h3 className="text-xl font-semibold text-[#5c2484] mb-2">What We Do</h3>
        <p className="text-gray-700 leading-relaxed">
          We craft purposeful solutions — uniting design, automation, and strategy to simplify online growth.
        </p>
      </div>
    </div>

    {/* button */}
    <div className="mt-16">
      <a
        href="/about"
        className="inline-block text-[#5c2484] font-semibold border border-[#5c2484] px-8 py-3 rounded-full hover:bg-[#5c2484] hover:text-white transition-all duration-300"
      >
        More About Us
      </a>
    </div>
  </div>
</section>

  {/* FAQ */}     
<section className="relative py-32 bg-gradient-to-b from-purple-200 via-white to-purple-200 overflow-hidden">

  <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-200/20 rounded-full filter blur-3xl animate-spin-slow"></div>
  <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-yellow-200/10 rounded-full filter blur-3xl animate-pulse-slow"></div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r text-[#5c2484] bg-clip-text t">
      Frequently Asked Questions
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left: Featured questions */}
      <div className="space-y-6">
        {[
          {
            question: "Can I schedule for multiple platforms?",
            answer: "Yes! Manage Instagram, X, Facebook & LinkedIn from one dashboard.",
            color: "bg-purple-100",
          },
          {
            question: "How much does it cost?",
            answer: "Basic plan is free. Premium unlocks analytics, automation & team features.",
            color: "bg-yellow-100",
          },
        ].map((faq, i) => (
          <div key={i} className={`${faq.color} rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500`}>
            <h3 className="font-semibold text-gray-800">{faq.question}</h3>
            <p className="text-gray-700 mt-2 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Center: Visual interactive FAQ */}
      <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-center items-center">
        <div className="text-purple-600 text-6xl mb-4 animate-bounce-slow">❓</div>
        <p className="text-center text-gray-700 font-medium text-lg">
          All your questions answered in one place.
        </p>
        <div className="absolute -top-6 -left-6 w-16 h-16 border-2 border-dashed border-purple-300 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-dashed border-yellow-300 rounded-full animate-pulse-slow"></div>
      </div>

      {/* Right: Collapsible interactive FAQs */}
      <div className="space-y-4">
        {[
          {
            question: "Is there onboarding?",
            answer: "Step-by-step guides, tooltips, and video walkthroughs help everyone get started quickly.",
          },
          {
            question: "Can I collaborate with my team?",
            answer: "Invite team members, assign roles, and manage projects collaboratively.",
          },
          {
            question: "Are there analytics insights?",
            answer: "Yes! Track engagement, growth, and performance metrics in real-time dashboards.",
          },
        ].map((faq, i) => (
          <details key={i} className="group bg-white/80 backdrop-blur-md rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border-l-4 border-purple-900">
            <summary className="flex justify-between items-center font-semibold text-gray-800 list-none">
              {faq.question}
              <span className="transition-transform group-open:rotate-45 text-gray-400 text-xl">+</span>
            </summary>
            <p className="mt-3 text-gray-700 transition-all duration-500 ease-in-out">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Getting Started Section */}
<section className="relative py-24 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 overflow-hidden">
  {/* Abstract floating shapes */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-200/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-200/20 rounded-full filter blur-3xl animate-rotate-slow"></div>

  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r text-[#5c2484] bg-clip-text ">
      Getting Started is as Easy as...
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          step: "1",
          title: "Start 15-day free trial",
          desc: "Enjoy full access to our core features on the highest plan.",
          color: "from-purple-400 to-purple-600",
        },
        {
          step: "2",
          title: "Get onboarded within minutes",
          desc: "Receive ongoing emails, tips, and support to help you level up quickly.",
          color: "from-yellow-400 to-yellow-600",
        },
        {
          step: "3",
          title: "Choose your plan",
          desc: "Pick the plan that most suits your needs with the option to upgrade anytime!",
          color: "from-pink-400 to-pink-600",
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`group relative bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-l-8 border-gradient-to-r ${item.color}`}
        >
          <div className="text-6xl font-bold text-gray-800 mb-4 group-hover:scale-110 transition-transform duration-500">
            {item.step}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
          <button className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-300 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
            Start Your Free Trial
          </button>
          {/* Floating accent */}
          <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-dashed border-gray-300 rounded-full animate-spin-slow"></div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Functional Goal Tracker Section */}
<section className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-indigo-100 overflow-hidden">
  {/* Floating abstract shapes */}
  <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-200/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-yellow-200/20 rounded-full filter blur-3xl animate-rotate-slow"></div>

  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r text-[#5c2484] bg-clip-text">
      Track Your Social Media Goals
    </h2>

    {/* Add Goal Form */}
    <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center">
      <input
        type="text"
        placeholder="Goal Title"
        className="px-4 py-2 rounded-xl border border-gray-300 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-purple-400"
        id="newGoalTitle"
      />
      <input
        type="number"
        placeholder="Progress %"
        className="px-4 py-2 rounded-xl border border-gray-300 w-32 focus:outline-none focus:ring-2 focus:ring-purple-400"
        id="newGoalProgress"
      />
      <button
        className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-xl shadow-lg hover:bg-purple-700 transition-colors"
        onClick={() => {
          const titleInput = document.getElementById("newGoalTitle");
          const progressInput = document.getElementById("newGoalProgress");
          const title = titleInput.value.trim();
          const progress = Number(progressInput.value);
          if (!title || progress < 0 || progress > 100) return;

          const goalList = document.getElementById("goalList");
          const id = goalList.children.length + 1;
          const colors = ["from-purple-500 to-purple-300", "from-yellow-400 to-yellow-200", "from-pink-400 to-pink-300", "from-indigo-500 to-indigo-300", "from-green-400 to-green-300"];
          const color = colors[id % colors.length];

          const goalItem = document.createElement("div");
          goalItem.className = "relative flex items-center mb-10";
          goalItem.innerHTML = `
            <div class="absolute -left-6 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shadow-md">
              <div class="w-10 h-10 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white font-semibold">${progress}%</div>
            </div>
            <div class="ml-12 p-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg w-full">
              <h3 class="font-semibold text-gray-800 text-lg">${title}</h3>
              <div class="mt-3 w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-3 rounded-full bg-gradient-to-r ${color}" style="width: ${progress}%"></div>
              </div>
              <p class="mt-2 text-xs text-gray-500">Progress: ${progress}%</p>
            </div>
          `;
          goalList.appendChild(goalItem);

          titleInput.value = "";
          progressInput.value = "";
        }}
      >
        Add Goal
      </button>
    </div>

    {/* Goals List */}
    <div id="goalList" className="relative border-l-2 border-gray-300 ml-6">
      <div className="relative flex items-center mb-10">
        <div className="absolute -left-6 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shadow-md">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 flex items-center justify-center text-white font-semibold">
            70%
          </div>
        </div>
        <div className="ml-12 p-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg w-full">
          <h3 className="font-semibold text-gray-800 text-lg">Schedule 10 Posts</h3>
          <div className="mt-3 w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-300" style={{ width: "70%" }}></div>
          </div>
          <p className="mt-2 text-xs text-gray-500">Progress: 70%</p>
        </div>
      </div>

      <div className="relative flex items-center mb-10">
        <div className="absolute -left-6 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shadow-md">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200 flex items-center justify-center text-white font-semibold">
            40%
          </div>
        </div>
        <div className="ml-12 p-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg w-full">
          <h3 className="font-semibold text-gray-800 text-lg">Increase Engagement</h3>
          <div className="mt-3 w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200" style={{ width: "40%" }}></div>
          </div>
          <p className="mt-2 text-xs text-gray-500">Progress: 40%</p>
        </div>
      </div>
    </div>
  </div>
</section>

 
      {/* CTA Section */}
      <CtaCard />
    </div>
  );
}
