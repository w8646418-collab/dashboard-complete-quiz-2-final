import React from "react";

const TeamCard = ({ name, role, description, image }) => {
  return (
    <div className="relative bg-white border border-[#e5d4ff] rounded-3xl mt-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 flex flex-col items-center text-center">
      
      {/* Profile Image with gradient ring */}
      <div className="absolute -top-12 w-30 h-30 rounded-full bg-[#ee9507] p-[3px]">
        <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-md">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-16">
        <h3 className="text-2xl font-extrabold text-[#d8a406] mb-1">{name}</h3>
        <p className="text-sm text-[#4f0581] font-bold mb-3">{role}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#b026ff]/30 to-transparent rounded-b-3xl"></div>
    </div>
  );
};

export default TeamCard;
