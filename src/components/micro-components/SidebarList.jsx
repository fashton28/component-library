import React from 'react';

const items = [
  { icon: 'check_box_outline_blank', label: 'Box' },
  { icon: 'grid_on', label: 'Grid' },
  { icon: 'image', label: 'Image' },
  { icon: 'image', label: 'Image' },
  { icon: 'text_fields', label: 'Text' },
];

const SidebarList = () => (
  <div className="bg-[#181A20] rounded-lg p-2 mb-4">
    {items.map((item, idx) => (
      <div key={idx} className="flex items-center px-2 py-1 hover:bg-[#23262F] rounded cursor-pointer">
        <span className="material-icons mr-2 text-gray-400">{item.icon}</span>
        <span className="text-white text-sm">{item.label}</span>
      </div>
    ))}
  </div>
);

export default SidebarList; 