import React from "react";

const InspirationCard = ({ title, description, example }) => {
  return (
    <div className="bg-white relative overflow-hidden rounded-2xl p-6 w-full sm:w-[48%] lg:w-[31%] shadow-md border border-transparent hover:border-[#b026ff]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5e1ff]/20 to-[#ede0ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <h3 className="font-semibold text-[#7a00cc] mb-2 relative z-10">
        {title}
      </h3>
      <p className="text-gray-600 text-sm relative z-10">{description}</p>
      <div className="mt-4 text-xs text-gray-500 relative z-10">
        Example: "{example}"
      </div>
    </div>
  );
};

export default InspirationCard;
