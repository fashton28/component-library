import React from 'react';

const icons = [
  'star_border',
  'bookmark_border',
  'info',
  'favorite_border',
  'share',
];

const IconButtonGroup = () => (
  <div className="flex items-center gap-2 mb-4">
    {icons.map((icon, idx) => (
      <button key={idx} className="bg-[#181A20] p-2 rounded-lg text-blue-500 hover:bg-blue-600 hover:text-white transition">
        <span className="material-icons">{icon}</span>
      </button>
    ))}
    {/* Toggle Switch */}
    <label className="inline-flex items-center cursor-pointer ml-2">
      <input type="checkbox" className="sr-only peer" defaultChecked />
      <div className="w-10 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-600 transition"></div>
      <div className="absolute w-4 h-4 bg-white rounded-full shadow -translate-y-1/2 left-1 top-1/2 peer-checked:translate-x-4 transition"></div>
    </label>
  </div>
);

export default IconButtonGroup; 