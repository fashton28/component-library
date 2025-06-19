import React from 'react';
import { LuSun, LuMoon } from 'react-icons/lu';

export default function Color({ isDark, setIsDark }) {
  return (
    <div className={`p-1 flex gap-1 w-52 rounded-xl  ${isDark ? 'bg-zinc-100/10' : 'bg-purple-100/30'}`}>
      <button
        className={`flex items-center p-2 flex-1 justify-center rounded-lg transition-colors duration-150 ${
          !isDark ? 'bg-white/70 text-black font-semibold shadow' : 'bg-transparent hover:bg-zinc-200/20 text-white/70'
        }`}
        onClick={() => setIsDark(false)}
      >
        <LuSun size={18} className='mr-1' /> <span className='text-sm'>Light</span>
      </button>
      <button
        className={`flex items-center p-2 flex-1 justify-center rounded-lg transition-colors duration-150 ${
          isDark ? 'bg-white/20 text-white font-semibold shadow' : 'bg-transparent hover:bg-zinc-200/20 text-white/70'
        }`}
        onClick={() => setIsDark(true)}
      >
        <LuMoon size={18} className='mr-1' /> <span className='text-sm'>Dark</span>
      </button>
    </div>
  );
}
