import { Link } from "react-router-dom";
import FeatureHomeCard from "../components/FeatureHomeCard";
import CtaCard from "../components/CtaCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-100 text-gray-800">
      {}
      <Hero />
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#5c2484] mb-6">
            Everything You Need to Grow Your Brand
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            Intuitive tools that help you manage content, analyze performance,
            and stay consistent across every platform — built for creators.
          </p>

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

      {/* CALENDAR  */}
      <section className="bg-gradient-to-br from-[#250035] via-[#3a005a] to-[#4c006e] py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-start">
            <div>
              <h2 className="text-5xl font-bold text-[#f6c90e] leading-tight mb-4">
                Manage Your Content at a Glance
              </h2>
              <p className="text-gray-200 text-lg max-w-md leading-relaxed">
                Stay organized, track campaigns, and visualize your social
                schedule — all in one intuitive dashboard built to save time.
              </p>
            </div>
          {/* LEFT CONTENT */}
          <div className="space-y-10">

            {/* STATS CARDS */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "12", label: "Scheduled Posts" },
                { num: "8", label: "Completed Posts" },
                { num: "3", label: "Pending Reviews" },
                { num: "2", label: "Collaborations" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/90 p-6 rounded-2xl shadow-md hover:shadow-lg border border-white/40 text-center transition-all duration-300 hover:scale-[1.03]"
                >
                  <div className="text-3xl font-bold text-[#5c2484]">
                    {item.num}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            {/* UPCOMING POST CARD */}
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition duration-300">
              <h3 className="text-lg font-semibold text-[#5c2484] mb-4">
                Upcoming Post
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src="https://cdn.dribbble.com/userupload/13435397/file/original-51b3d29a9f19f05b8cfc58b861a56de3.png?resize=640x480"
                  alt="Upcoming Post"
                  className="w-20 h-20 object-cover rounded-xl"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    🌟 Product Launch Reel
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">
                    Scheduled for October 21, 2025
                  </p>
                  <span className="mt-2 inline-block px-3 py-1 text-xs font-medium bg-[#7a00cc]/10 text-[#7a00cc] rounded-full">
                    Instagram • Reel
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CALENDAR PREVIEW */}
          <div className="bg-white rounded-3xl shadow-[0_0_60px_rgba(122,0,204,0.15)] p-8 border border-gray-100 hover:shadow-[0_0_80px_rgba(122,0,204,0.25)] transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#5c2484]">
                  October 2025
                </h3>
                <p className="text-sm text-gray-500">
                  Monthly Content Calendar
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                  Prev
                </button>
                <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                  Next
                </button>
              </div>
            </div>

            {/* DAYS */}
            <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-500 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            {/* DATE CELLS */}
            <div className="grid grid-cols-7 gap-2 text-sm">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <div
                  key={day}
                  className={`relative p-4 rounded-xl border text-center transition-all duration-300 cursor-pointer
            ${
              day === 7
                ? "bg-[#7a00cc] text-white font-semibold"
                : day === 21
                ? "bg-pink-100 border-pink-200"
                : day === 30
                ? "bg-green-100 border-green-200"
                : "bg-white hover:bg-indigo-50 border-gray-100"
            }`}
                >
                  {day}
                  {day === 7 && (
                    <div className="text-[10px] absolute bottom-1 left-1/2 -translate-x-1/2 bg-white/20 px-2 py-0.5 rounded-full">
                      Reels
                    </div>
                  )}
                  {day === 21 && (
                    <div className="text-[10px] absolute bottom-1 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-2 py-0.5 rounded-full">
                      Collab
                    </div>
                  )}
                  {day === 30 && (
                    <div className="text-[10px] absolute bottom-1 left-1/2 -translate-x-1/2 bg-green-500 text-white px-2 py-0.5 rounded-full">
                      Post
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* LEGEND */}
            <div className="mt-6 flex flex-wrap items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#7a00cc] rounded-full"></span>{" "}
                Scheduled
                <span className="w-3 h-3 bg-green-500 rounded-full ml-4"></span>{" "}
                Published
                <span className="w-3 h-3 bg-pink-500 rounded-full ml-4"></span>{" "}
                Collaboration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD*/}

      <section className="bg-gradient-to-r from-purple-50 via-indigo-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative order-1 md:order-none">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-indigo-100">
              <img
                src="/images/dashboardimage.png"
                alt="Dashboard Preview"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl px-4 py-3 text-sm text-gray-600 hidden md:block">
              <span className="font-semibold text-[#5c2484]">Next Post:</span>{" "}
              “Boost Your Reach”
            </div>
          </div>

          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-[#5c2484] mb-4">
              Manage Everything from One Dashboard
            </h2>
            <p className="text-gray-600 mb-6">
              Take full control of your creative process — plan, schedule, and
              analyze all your posts in one elegant dashboard.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#7a00cc] rounded-full"></span>{" "}
                Preview and edit posts instantly
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#7a00cc] rounded-full"></span>{" "}
                Monitor key performance metrics
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#7a00cc] rounded-full"></span>{" "}
                Streamline teamwork with visual clarity
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ANALYTICS*/}

      <section className="relative bg-gradient-to-b from-white via-indigo-50 to-purple-100 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.15),transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4b1c6f] mb-6 leading-tight">
              Analytics That{" "}
              <span className="text-[#7a00cc]">Tell Your Story</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Dive into metrics that actually matter — engagement, consistency,
              and growth. Get insights you can act on.
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                  <span>Engagement Rate</span>
                  <span>87%</span>
                </div>
                <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                  <div className="h-2 bg-[#7a00cc] w-[87%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                  <span>Reach Growth</span>
                  <span>+46%</span>
                </div>
                <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                  <div className="h-2 bg-indigo-400 w-[46%] rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                  <span>Scheduled Posts</span>
                  <span>142</span>
                </div>
                <div className="h-2 bg-indigo-100 rounded-full overflow-hidden">
                  <div className="h-2 bg-indigo-300 w-[75%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#7a00cc] to-indigo-400 rounded-full opacity-20 blur-3xl"></div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#4b1c6f]">
                Engagement Over Time
              </h3>
              <p className="text-gray-500 text-sm">Last 6 Months</p>
            </div>

            <div className="relative h-56 flex items-end justify-between gap-2">
              {[30, 50, 40, 65, 80, 70].map((height, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-indigo-300 to-[#7a00cc] rounded-md transition-all duration-300 hover:opacity-90"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>

            <div className="mt-4 flex justify-between text-xs text-gray-500">
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
            </div>
          </div>
        </div>
      </section>

      {/*INSPIRATION BOARD*/}
      <section className="bg-gradient-to-r from-indigo-100 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5c2484]">
                Inspiration Board
              </h2>
              <p className="text-gray-600 mt-1">
                A curated list of prompts and ideas for your next posts.
              </p>
            </div>
            <div className="text-sm text-gray-500">
              Tip: Use these on slow days to stay consistent
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-[#7a00cc] mb-2">
                #MondayMotivation
              </h3>
              <p className="text-gray-600 text-sm">
                Share a short story or quote that motivates your audience.
              </p>
              <div className="mt-4 text-xs text-gray-500">
                Example: "How we started vs now"
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-[#7a00cc] mb-2">
                #BehindTheScenes
              </h3>
              <p className="text-gray-600 text-sm">
                Show your process—people love authenticity.
              </p>
              <div className="mt-4 text-xs text-gray-500">
                Example: "Quick clip of production"
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-[#7a00cc] mb-2">
                #CustomerSpotlight
              </h3>
              <p className="text-gray-600 text-sm">
                Highlight a customer story or testimonial.
              </p>
              <div className="mt-4 text-xs text-gray-500">
                Example: "Before and after"
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-[#7a00cc] mb-2">
                #WeekendVibes
              </h3>
              <p className="text-gray-600 text-sm">
                Share a casual update to humanize your brand.
              </p>
              <div className="mt-4 text-xs text-gray-500">
                Example: "Team brunch photo"
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-[#7a00cc] mb-2">#LaunchDay</h3>
              <p className="text-gray-600 text-sm">
                Create excitement with teasers and countdowns.
              </p>
              <div className="mt-4 text-xs text-gray-500">
                Example: "3 days to launch"
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-[#7a00cc] mb-2">#HowTo</h3>
              <p className="text-gray-600 text-sm">
                Share tutorials or tips that add value to your followers.
              </p>
              <div className="mt-4 text-xs text-gray-500">
                Example: "1-minute tutorial"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*SUPPORT  */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5c2484] mb-8">
            FAQ & Support
          </h2>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-[#5c2484]">
                Can I schedule for multiple platforms?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes — schedule and publish to Instagram, X, Facebook, and
                LinkedIn from one place.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-[#5c2484]">
                How much does it cost?
              </h3>
              <p className="text-gray-600 mt-2">
                Basic plan is free. Premium plans offer advanced analytics and
                team features.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-semibold text-[#5c2484]">
                Is there onboarding?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes — simple guides and tooltips to help you get started
                quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*LOVE  */}
      <section className="relative bg-gradient-to-br from-[#4b1c6f] via-[#5c2494] to-[#7a00cc] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Why Creators{" "}
            <span className="text-indigo-200">Love Our Platform</span>
          </h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-14 text-lg">
            Designed for modern creators who want power, elegance, and
            effortless workflow — all in one dashboard.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-2xl p-8 backdrop-blur-md shadow-xl border border-white/10 hover:-translate-y-2">
              <div className="mb-4 flex justify-center">
                <div className="bg-white/20 p-4 rounded-full group-hover:bg-white/30 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7h18M3 12h18M3 17h18"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Simple & Intuitive</h3>
              <p className="text-sm text-indigo-100 leading-relaxed">
                Seamlessly plan and organize your posts with a clean,
                distraction-free interface that feels effortless.
              </p>
            </div>

            <div className="group bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-2xl p-8 backdrop-blur-md shadow-xl border border-white/10 hover:-translate-y-2">
              <div className="mb-4 flex justify-center">
                <div className="bg-white/20 p-4 rounded-full group-hover:bg-white/30 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v8m4-4H8"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Smart Automation</h3>
              <p className="text-sm text-indigo-100 leading-relaxed">
                Auto-post your content at peak times and let the system handle
                scheduling — while you focus on creativity.
              </p>
            </div>

            <div className="group bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-2xl p-8 backdrop-blur-md shadow-xl border border-white/10 hover:-translate-y-2">
              <div className="mb-4 flex justify-center">
                <div className="bg-white/20 p-4 rounded-full group-hover:bg-white/30 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-2">Reliable Insights</h3>
              <p className="text-sm text-indigo-100 leading-relaxed">
                Understand what performs best — analyze trends and grow smarter
                with clear, actionable analytics.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <a
              href="#"
              className="inline-block px-8 py-4 bg-white text-[#5c2484] font-semibold rounded-full shadow-md hover:bg-indigo-100 transition"
            >
              Explore Dashboard →
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-indigo-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5c2484] mb-8">
            What Our Users Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-600 italic">
                “This tool completely transformed my workflow — I save hours
                every week.”
              </p>
              <div className="mt-4 text-sm font-semibold text-[#5c2484]">
                — Sarah, Content Creator
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-600 italic">
                “The automation and analytics feel like having a mini social
                media team.”
              </p>
              <div className="mt-4 text-sm font-semibold text-[#5c2484]">
                — Alex, Marketing Lead
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-600 italic">
                “Clean, fast, and powerful — exactly what I needed for managing
                accounts.”
              </p>
              <div className="mt-4 text-sm font-semibold text-[#5c2484]">
                — Priya, Entrepreneur
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      {/* CREATIVE FLOW */}
      <section className="bg-gradient-to-r from-white via-indigo-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
          {/* Image Side */}
          <div className="md:w-1/3 w-2/3 mx-auto relative">
            <img
              src="/images/content.jpg"
              alt="Creator working on content"
              className="rounded-xl shadow-lg w-full h-48 md:h-56 object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Floating decorative dots */}
            <span className="absolute -top-3 -left-3 w-3 h-3 bg-[#7a00cc] rounded-full animate-bounce"></span>
            <span className="absolute -bottom-2 right-5 w-4 h-4 bg-[#5c2484] rounded-full animate-pulse"></span>
          </div>

          {/* Text Side */}
          <div className="md:w-2/3 text-center md:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5c2484] mb-2">
              The Creative Flow — Visualized
            </h2>
            <p className="text-gray-600 mb-4">
              See how top creators plan, design, and bring ideas to life.
              Transform scattered thoughts into a clear, visual roadmap for
              success.
            </p>
            <ul className="space-y-2 text-gray-700 text-left">
              {[
                "Plan visuals and captions together for consistency.",
                "Drag and drop media directly into your calendar view.",
                "Preview your brand’s story flow before publishing.",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="fleax items-center gap-2 hover:text-[#7a00cc] transition-colors duration-300 transform hover:translate-x-1"
                >
                  <span className="w-2 h-2 bg-[#7a00cc] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COMMUNITY*/}
      <section className="bg-indigo-50 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5c2484] mb-6">
            Join the Community
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Creators, small teams, and agencies use our platform to stay
            organized and grow faster.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              to="/signup"
              className="px-6 py-3 rounded-full bg-[#5c2484] text-white font-semibold hover:bg-[#6e30a4]"
            >
              Create Account
            </Link>
            <Link
              to="/community"
              className="px-6 py-3 rounded-full border border-[#e6d9f5] text-[#5c2484]"
            >
              Visit Community
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#5c2484] to-[#7a00cc] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-indigo-100 mb-8">
            Start planning smarter, publishing faster, and analyzing clearer —
            all from one place.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              to="/create-post"
              className="px-8 py-3 rounded-full bg-white text-[#5c2484] font-semibold hover:opacity-95"
            >
              Start Planning
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-3 rounded-full border border-white/30"
            >
              Explore Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
