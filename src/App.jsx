import { useState } from 'react'
import DarkMode from './components/DarkMode'
import Colors from './components/Colors'
import Palete from './components/Palete'
import SearchBar from './components/micro-components/SearchBar'
import UpgradeNotice from './components/micro-components/UpgradeNotice'
import SidebarList from './components/micro-components/SidebarList'
import ButtonGroup from './components/micro-components/ButtonGroup'
import IconButtonGroup from './components/micro-components/IconButtonGroup'
import UserCard from './components/micro-components/UserCard'
import SignUpForm from './components/micro-components/SignUpForm'
import AvatarGroup from './components/micro-components/AvatarGroup'
import InfoTextBlock from './components/micro-components/InfoTextBlock'
import TaskList from './components/micro-components/TaskList'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(true);
  const [accent, setAccent] = useState('#FFE9E4');
  const [background, setBackground] = useState('#FFE9E4');
  const [color, setColor] = useState('#000000');
  const[gray, setGray] = useState("#FFE9E4")
  //general notes --> dynamic colors can be achieved through variable declaration and using the style property.
  const bgGradient = isDark 
  ? `linear-gradient(to top, ${background}, ${accent})`
  : `linear-gradient(to top, ${background}, ${accent})`;
  return (
    <>
      <div className= 'fixed inset-0 min-w-full transition-colors duration-300' style={{ backgroundImage: bgGradient }}>
        <header className='mt-20'>
          <h1 className={`font-extrabold text-4xl ${isDark ? 'text-white' : 'text-black'}`}>
            Create a Custom Pallete
          </h1>
            <section className='flex justify-center p-5'>
            <DarkMode isDark={isDark} setIsDark={setIsDark} />
            </section>
        </header>
        <section className="mb-8">
            <Colors isDark={isDark} setIsDark={setIsDark}  accent ={accent} setAccent = {setAccent} color={color} setColor = {setColor} background={background} setBackground={setBackground} setGray={setGray}/>
        </section>

        <section>
           <Palete color={color} setColor = {setColor} gray={gray} />
        </section>
        <section id='components' className="h-screen flex flex-row min-h-0">
          <div className="flex flex-row w-full h-full min-h-0">
            {/* Sidebar */}
            <aside className="w-1/4 min-w-[320px] max-w-xs p-6 flex flex-col gap-4 overflow-auto min-h-0 h-full">
              <SearchBar />
              <UpgradeNotice />
              <SidebarList />
              <ButtonGroup />
              <IconButtonGroup />
              <UserCard />
              <UserCard />
            </aside>
            {/* Center */}
            <main className="flex-1 flex flex-col items-center justify-center p-8 overflow-auto min-h-0 h-full">
              <SignUpForm />
            </main>
            {/* Right panel */}
            <aside className="w-1/3 min-w-[350px] max-w-md p-6 flex flex-col gap-4 border-l border-[#23262F] overflow-auto min-h-0 h-full">
              <div className="mb-2">
                <div className="flex gap-2 mb-2">
                  <AvatarGroup />
                </div>
                <InfoTextBlock />
                <TaskList />
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
