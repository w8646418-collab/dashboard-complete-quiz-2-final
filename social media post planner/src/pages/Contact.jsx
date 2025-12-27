import React from "react";

function Contact() {
  return (
    <div className="font-poppins text-gray-900">
      <section className="bg-[url('/images/contacthero.jpeg')] relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white px-8 md:px-2 pt-4 mt-23">

        {/* Text Content */}
        <h2 className="text-4xl font-extrabold text-[#ffb703] mb-3 z-10">
          We’d Love to Hear From You
        </h2>
        <p className="text-lg max-w-2xl text-white text-center z-10">
          Whether you’re managing multiple accounts, scheduling posts, or
          analyzing your brand’s growth, reach out to us. Let’s plan, post, and
          grow your social media presence together!
        </p>
      </section>
      {/* Contact Info Section */}
      <section className="relative bg-gradient-to-br from-[#fdf4ff] via-[#fff9f3] to-[#fef6ff] py-24 px-8 min-h-screen overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-[-5rem] left-[-5rem] w-96 h-96 bg-[#e6d2ff] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-[#ffe7b3] rounded-full blur-3xl opacity-40"></div>

        {/* Heading Section */}
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#6b1f97] mb-4 drop-shadow-sm">
            Let’s <span className="text-[#ebab09]">Get in Touch</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Have a question, collaboration idea, or feedback? We’d love to hear
            from you! Connect with us through any of the ways below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Phone */}
          <div className="bg-white/40 backdrop-blur-lg border border-[#7a00cc]  rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#efac02] to-[#ffd75b] shadow-md mb-5">
              <i className="fas fa-phone text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-extrabold text-[#7a00cc] mb-2">
              Call Us
            </h3>
            <p className="text-gray-700">+92-26673678</p>
            <p className="text-gray-700">+92-36726495</p>
          </div>

          {/* Email */}
          <div className="bg-white/40 backdrop-blur-lg border border-[#7a00cc]  rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center md:-mt-10">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#6b1f97] to-[#9d55cc] shadow-md mb-5">
              <i className="fas fa-envelope text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-extrabold text-[#7a00cc] mb-2">
              Email Us
            </h3>
            <p className="text-gray-700">info@socialplanner.com</p>
          </div>

          {/* Address */}
          <div className="bg-white/40 backdrop-blur-lg border border-[#7a00cc] rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#efac02] to-[#ffd75b] shadow-md mb-5">
              <i className="fas fa-map-marker-alt text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-extrabold text-[#7a00cc] mb-2">
              Visit Us
            </h3>
            <p className="text-gray-700">Gujrat, Pakistan - 50700</p>
          </div>
        </div>
      </section>

      {/* Message Form Section */}
      <section className="relative bg-gradient-to-br from-[#2a0054] via-[#3b007d] to-[#4f00b5] min-h-screen flex items-center justify-center py-12 px-8">
        {/* Background Decorative Overlay */}
        <div className="absolute inset-0 bg-[url('/images/contacthero.jpeg')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Side Image */}
          <div className="relative group">
            <h2 className="text-4xl font-bold text-white mb-2">
              Let’s Talk ✨
            </h2>
            <p className="text-white/70 mb-8">
              Have questions or a project idea? Fill out the form below and
              we’ll get back to you soon.
            </p>
            <img
              src="/images/contact.svg"
              alt="Contact illustration"
              className="ml-15 w-[380px] h-[380px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a0054]/60 via-transparent to-transparent rounded-3xl"></div>
          </div>

          {/* Right Side Form */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl hover:shadow-purple-900/40 transition-all duration-700">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const inputs = form.querySelectorAll("input, textarea");
                let valid = true;
                inputs.forEach((input) => {
                  if (!input.value.trim()) {
                    input.classList.add("ring-2", "ring-red-500");
                    valid = false;
                  } else {
                    input.classList.remove("ring-2", "ring-red-500");
                  }
                });
                if (valid) alert("✅ Message sent successfully!");
              }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center gap-3 bg-white/15 px-4 py-3 rounded-xl">
                <i className="fa-solid fa-user text-yellow-400"></i>
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  className="bg-transparent text-white placeholder-white/60 w-full outline-none"
                />
              </div>

              <div className="flex items-center gap-3 bg-white/15 px-4 py-3 rounded-xl">
                <i className="fa-solid fa-envelope text-yellow-400"></i>
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="bg-transparent text-white placeholder-white/60 w-full outline-none"
                />
              </div>

              <div className="flex items-center gap-3 bg-white/15 px-4 py-3 rounded-xl">
                <i className="fa-solid fa-phone text-yellow-400"></i>
                <input
                  type="number"
                  placeholder="Phone Number *"
                  required
                  className="bg-transparent text-white placeholder-white/60 w-full outline-none"
                />
              </div>

              <div className="flex items-start gap-3 bg-white/15 px-4 py-3 rounded-xl">
                <i className="fa-solid fa-message text-yellow-400 mt-1"></i>
                <textarea
                  rows="4"
                  placeholder="Your Message *"
                  required
                  className="bg-transparent text-white placeholder-white/60 w-full outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-semibold py-3 rounded-xl hover:scale-[1.03] shadow-md hover:shadow-yellow-500/30 transition-transform duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
