import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DarkMode from './components/Color'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className={`fixed inset-0 min-h-screen min-w-full transition-colors duration-300 ${isDark ? 'bg-gradient-to-t from-black to-[#0a1a3c]' : 'bg-gradient-to-t from-white to-[#FFE9E4]'}`}>
      <header>
        <h1 className={`font-extrabold text-4xl ${isDark ? 'text-white' : 'text-black'}`}>
          Create a Custom Pallete
        </h1>
      </header>
      <div className='flex justify-center p-5'>
        <DarkMode isDark={isDark} setIsDark={setIsDark} />
      </div>
    </div>
  )
}

export default App
