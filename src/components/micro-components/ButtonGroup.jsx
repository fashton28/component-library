import React from 'react';

const buttons = [
  'Fully-featured',
  'Built with Radix',
  'Open source',
];

const ButtonGroup = () => (
  <div className="flex gap-2 mb-4">
    {buttons.map((label, idx) => (
      <button
        key={idx}
        className="px-3 py-1 rounded-full border border-blue-600 text-blue-400 bg-[#181A20] text-xs font-semibold hover:bg-blue-600 hover:text-white transition"
      >
        {label}
      </button>
    ))}
  </div>
);

export default ButtonGroup; 