import React from 'react';

const UserCard = () => (
  <div className="flex items-center bg-[#181A20] p-4 rounded-lg mb-2">
    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Emily Adams" className="w-12 h-12 rounded-full mr-4 grayscale" />
    <div>
      <div className="text-white font-semibold">Emily Adams</div>
      <div className="text-gray-400 text-sm">emily.adams@example.com</div>
    </div>
  </div>
);

export default UserCard; 