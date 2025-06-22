import { useState } from 'react'
import DarkMode from './components/DarkMode'
import Colors from './components/Colors'
import Palete from './components/Palete'
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
    <div className= 'fixed inset-0 min-h-screen min-w-full transition-colors duration-300' style={{ backgroundImage: bgGradient }}>
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
      <section>
          
      </section>
    </div>
  )
}

export default App
