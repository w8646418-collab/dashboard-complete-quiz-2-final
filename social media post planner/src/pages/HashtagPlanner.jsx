import React, { useState, useEffect } from "react";

const HashtagPlanner = () => {
  const [keyword, setKeyword] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [copyMessage, setCopyMessage] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (copyMessage) {
      const timer = setTimeout(() => setCopyMessage(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [copyMessage]);

  const generateHashtags = () => {
    const kw = keyword.trim().toLowerCase();
    if (!kw) {
      alert("Please enter a keyword first!");
      return;
    }

    const suffixes = ["Life", "Goals", "Daily", "Lovers", "Community", "Inspiration", "Vibes", "Trends", "2025"];
    const suggestions = Array.from({ length: count }, () => {
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      return `#${kw}${suffix}`;
    });

    setHashtags(suggestions);
  };

  const copyToClipboard = () => {
    if (hashtags.length === 0) return;
    navigator.clipboard.writeText(hashtags.join(" "));
    setCopyMessage("Copied");
  };

  const clearAll = () => {
    setKeyword("");
    setHashtags([]);
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h1 className="text-4xl md:text-2xl font-bold text-purple-800 mb-8 text-left flex  justify-left  gap-3">
          Generate Hashtags
        </h1>

        <div className="space-y-4">
          <h1 className="text-sm font-semibold">Topic or Keyword</h1>
          <input
            type="text"
            placeholder="e.g.. Digital Marketing, Fashion, Sunset .. "
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-1 h-15 focus:ring-2 focus:ring-purple-400 focus:outline-none"          
            />

          <h1 className="text-sm font-semibold mb-3">Category</h1>
          <div className="grid grid-cols-2 gap-3">
             {["Business", "Lifestyle", "Fitness", "Food", "Travel", "Technology"].map((cat) => (
            <button
              key={cat}
              onClick={() => setPlatform(cat)}
              className={`py-3 rounded-xl text-sm font-medium transition-all duration-200 transform
               ${platform === cat
                   ? "bg-purple-600 text-white scale-105 shadow-lg"
                   : "bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-700 hover:scale-105 hover:shadow-md"
                }
            `}
            >
             {cat}
            </button>
            ))}
          </div>

          <button
            onClick={generateHashtags}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3.5 rounded-lg font-semibold hover:scale-105 transition-transform shadow-md"
          >
             Generate Hashtags
          </button>

          <div className="mt-6">
            <p className="font-semibold text-gray-700 mb-2">⬆ Trending Now</p>
            <div className="flex flex-wrap gap-2">
              {["#MondayMotivation", "#TechTuesday", "#ThrowbackThursday", "#FridayFeeling"].map((t) => (
                <span key={t} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-purple-800">Generated Hashtags</h2>
          {hashtags.length > 0 && (
            <button
              className="text-sm bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded"
              onClick={() => {
                navigator.clipboard.writeText(hashtags.join(" "));
                setCopyMessage("All Copied!");
              }}
            >
              Copy All
            </button>
          )}
        </div>

        {hashtags.length === 0 ? (
          <p className="text-gray-400 mt-6 text-center">Generate hashtags to see them here</p>
        ) : (
          <>
            <div className="flex flex-wrap gap-3 max-h-72 overflow-y-auto pr-2 mb-4">
              {hashtags.map((tag, index) => (
                <span
                  key={index}
                  onClick={() => {
                    navigator.clipboard.writeText(tag);
                    setCopyMessage("Copied!");
                  }}
                  className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {copyMessage && (
              <p className="text-green-600 font-semibold">{copyMessage}</p>
            )}
          </>
        )}
      </div>
    </div>
);
};

export default HashtagPlanner;