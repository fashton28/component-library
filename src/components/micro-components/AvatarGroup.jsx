import React from 'react';

const avatars = [
  { src: 'https://randomuser.me/api/portraits/men/32.jpg', alt: 'User 1' },
  { src: 'https://randomuser.me/api/portraits/women/65.jpg', alt: 'User 2' },
  { initials: 'V', color: 'bg-blue-700' },
  { initials: 'BG', color: 'bg-blue-500' },
  { icon: 'group', color: 'bg-blue-800' },
  { src: 'https://randomuser.me/api/portraits/men/33.jpg', alt: 'User 3' },
  { src: 'https://randomuser.me/api/portraits/women/66.jpg', alt: 'User 4' },
  { initials: 'V', color: 'bg-blue-700' },
  { initials: 'BG', color: 'bg-blue-500' },
  { icon: 'group', color: 'bg-blue-800' },
];

const AvatarGroup = () => (
  <div className="flex gap-2 mb-4">
    {avatars.map((a, idx) => (
      a.src ? (
        <img key={idx} src={a.src} alt={a.alt} className="w-10 h-10 rounded-full border-2 border-[#181A20] object-cover" />
      ) : a.initials ? (
        <div key={idx} className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-[#181A20] ${a.color}`}>{a.initials}</div>
      ) : (
        <div key={idx} className={`w-10 h-10 rounded-full flex items-center justify-center text-white border-2 border-[#181A20] ${a.color}`}>
          <span className="material-icons">{a.icon}</span>
        </div>
      )
    ))}
  </div>
);

export default AvatarGroup; 