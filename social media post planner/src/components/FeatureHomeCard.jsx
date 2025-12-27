import React from "react";

const FeatureHomeCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white border border-[#41058b] rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-[#b026ff]/60 hover:-translate-y-2 transition-all duration-300">
      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#f5e1ff] to-[#ede0ff] rounded-xl mb-5 mx-auto shadow-inner">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#3b0066] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureHomeCard;
