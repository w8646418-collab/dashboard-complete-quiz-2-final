"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import Home from "../src/pages/Home"
import Features from "../src/pages/Features"
import CreatePost from "../src/pages/CreatePost"
import HashtagPlanner from "../src/pages/HashtagPlanner"
import About from "../src/pages/About"

export default function Page() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/hashtag-planner" element={<HashtagPlanner />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
