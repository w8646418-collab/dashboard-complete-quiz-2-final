import TeamCard from "../components/TeamCard";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-100 text-gray-800">
      {/* SECTION 1: HERO */}
      <section
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white px-8 md:px-2 pt-4 mt-23"
        style={{ backgroundImage: "url('/images/abouthero copy.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>{" "}
        {/* Optional dark overlay for contrast */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-md">
            About Social Planner
          </h1>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Your trusted partner in social media management — helping creators,
            brands, and businesses plan smarter, post consistently, and grow
            effortlessly.
          </p>
        </div>
      </section>

      {/* SECTION 2: TEAM */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fbfafc] via-[#e7e4ea] to-[#d6d5d6] py-24 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#350650] mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Passionate minds behind SocialPlanner — blending creativity,
            strategy, and technology to make social media effortless.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <TeamCard
              name="Hafsa Abdul Razzaq"
              role="Frontend Developer"
              description="Focused on elegant design and seamless user experiences."
              image="/images/hafsa.jpeg"
            />

            <TeamCard
              name="Tasmia Anwar"
              role="Backend Developer"
              description="Crafting responsive and dynamic user interfaces."
              image="/images/tasmia.jpeg"
            />

            <TeamCard
              name="Amna Amjad"
              role="Project Manager"
              description="Ensuring smooth collaboration and timely delivery."
              image="/images/amna.jpeg"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION + OFFERS + CONTACT */}
      <section className="py-20 bg-gradient-to-br from-[#e8d5f5] via-[#dabef1] to-[#ddc9ef]">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#5c2484] mb-14">
          What We Offer
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
          Discover tools designed to simplify your workflow, boost engagement,
          and help your brand shine across every platform.
        </p>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl border border-[#41058b]/30 hover:border-[#b026ff]/60 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500">
            <h2 className="text-2xl font-bold text-[#5c2484] mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              <div className="text-[#210753] font-semibold ">
                We help creators and businesses plan, design, and publish
                content without stress
              </div>
              we believe that managing social media should be simple, efficient,
              and effective. Our mission is to empower content creators,
              businesses, and social media managers with tools that streamline
              their workflow and maximize online presence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're committed to providing intuitive features that save you time
              while helping you maintain consistent engagement with your
              audience across all platforms.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-white p-8 rounded-2xl border border-[#41058b]/30 hover:border-[#b026ff]/60 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-500">
            <h2 className="text-2xl font-bold text-[#5c2484] mb-6">
              What We Offer
            </h2>

            {/* Feature 1 */}
            <div className="flex items-start space-x-4 mb-5 group">
              <div className="w-8 h-8 bg-gradient-to-br from-[#f5e1ff] to-[#ede0ff] rounded-lg flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 text-[#7a00cc]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[#3b0066] font-semibold">
                  Smart Scheduling
                </h3>
                <p className="text-gray-600 text-sm">
                  Plan and schedule your posts with precision timing.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4 mb-5 group">
              <div className="w-8 h-8 bg-gradient-to-br from-[#f5e1ff] to-[#ede0ff] rounded-lg flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 text-[#7a00cc]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[#3b0066] font-semibold">
                  Hashtag Intelligence
                </h3>
                <p className="text-gray-600 text-sm">
                  Generate relevant hashtags to boost your visibility.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-[#f5e1ff] to-[#ede0ff] rounded-lg flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5 text-[#7a00cc]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[#3b0066] font-semibold">
                  Automation Tools
                </h3>
                <p className="text-gray-600 text-sm">
                  Streamline your workflow with automated posting features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-purple-50 py-24 overflow-hidden">
        <div className="absolute inset-0"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT SECTION */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4b1c6f] mb-6 leading-tight">
              Solving the Chaos of Content Planning
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              We eliminate the stress of daily posting and help you plan,
              design, and publish content without burnout.
            </p>

            <div className="space-y-6">
              {[
                {
                  emoji: "✅",
                  title: "No More Posting Stress",
                  text: "Plan ahead and stay consistent without last-minute panic.",
                },
                {
                  emoji: "⚙️",
                  title: "Automated Scheduling",
                  text: "Set your posts once and let the system handle the rest.",
                },
                {
                  emoji: "🗓️",
                  title: "One-Click Content Calendar",
                  text: "Visualize everything in a clean, organized calendar.",
                },
                {
                  emoji: "🎨",
                  title: "Design & Post in Minutes",
                  text: "Create eye-catching content without using 5 different tools.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500">
                    {item.emoji}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#4b1c6f] group-hover:text-indigo-700 transition-colors duration-500">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL CARD */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-out group">
            <div className="absolute -top-10 -right-10 w-40 h-40 "></div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#4b1c6f]  transition-colors duration-500">
                From Overwhelm to Organized
              </h3>
              <p className="text-gray-500 text-sm">Your workflow, simplified</p>
            </div>

            <ul className="space-y-5">
              {[
                { emoji: "📌", text: "Plan posts in advance" },
                { emoji: "🕒", text: "Schedule once, publish automatically" },
                { emoji: "🎯", text: "Stay consistent across platforms" },
                { emoji: "🚀", text: "Boost engagement effortlessly" },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-500"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-gray-700 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-[#d3cddb] via-indigo-200 to-purple-300 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.15),transparent_70%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          {/* SECTION TITLE */}
          <h2 className="text-4xl font-extrabold text-[#4b1c6f] mb-14">
            Trusted by Creators & Brands
          </h2>

          {/* STATS SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-out">
              <h3 className="text-3xl font-bold text-[#4b1c6f]">10K+</h3>
              <p className="text-gray-600 mt-2">Posts Scheduled</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-out">
              <h3 className="text-3xl font-bold text-[#4b1c6f]">5K+</h3>
              <p className="text-gray-600 mt-2">Active Users</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-out">
              <h3 className="text-3xl font-bold text-[#4b1c6f]">4.9 ★</h3>
              <p className="text-gray-600 mt-2">User Ratings</p>
            </div>
          </div>

          {/* TESTIMONIALS SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                name: "Ayesha Khan",
                text: "Scheduler ne meri posting life itni asaan kar di — now I stay consistent without stress!",
                img: "/images/a.jpeg",
              },
              {
                name: "Daniyal Ahmed",
                text: "Perfect for freelancers and small brands — time saver & super clean UI.",
                img: "/images/b.jpeg",
              },
              {
                name: "Hina R.",
                text: "Team collaboration and scheduling features are game-changing!",
                img: "/images/c.jpeg",
              },
            ].map((user, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-transform duration-500 group relative overflow-hidden"
              >
                {/* Subtle gradient glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500"></div>

                <div className="flex flex-col items-center text-center relative z-10">
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-20 h-20 rounded-full border-4 border-white mb-4 shadow-md"
                  />
                  <p className="text-gray-700 text-sm mb-3">{user.text}</p>
                  <h4 className="font-semibold text-[#4b1c6f]">{user.name}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="py-16 px-6 bg-white rounded-2xl">
          <div className="max-w-6xl mx-auto">
           {/* Heading */}
          <h2 className="text-4xl font-extrabold text-center text-[#6b1f97] mb-6">
             Our <span className="text-[#ebab09]">Location</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
              Visit us at our office in Gujrat, Pakistan.
          </p>

            {/* Map Container */}
            <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-400">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0996986839425!2d74.0785!3d32.5742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ee9c2e3f9177b%3A0xdea3c3cab843046b!2sGujrat%2C%20Punjab%2050700%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702900000000"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-3xl"
               >
               </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
