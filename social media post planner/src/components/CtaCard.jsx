import React from 'react'
import { Link } from 'react-router-dom'

const CtaCard = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#2e004f] to-[#4a0078] text-white text-center relative overflow-hidden">

      {/* subtle glowing overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15)_0%,transparent_70%)]"></div>

      <div className="relative z-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
          Ready to Shine Brighter?
        </h2>

        <p className="text-white/90 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
          Take your digital presence to the next level with our elegant and effortless post planner.
        </p>

        <Link
          to="/create-post"
          className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#2e004f] font-semibold rounded-full shadow-lg hover:shadow-yellow-400/40 hover:scale-105 transition-all duration-300"
        >
          Start Free Trial
        </Link>
      </div>
    </section>
  )
}

export default CtaCard
