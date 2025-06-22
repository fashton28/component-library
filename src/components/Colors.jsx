import React from 'react'

export default function Colors({ isDark, setAccent, color, setColor, setBackground, setGray}) {
    const handleAccentChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        setAccent(newColor);
        
    };

    const handleGrayChange = (e) => {
        const newColor = e.target.value;
        setGray(newColor)
        
    };

    const handleBgChange = (e) => {
        const newColor = e.target.value;
        setBackground(newColor)
        
    };


    

  return (
    <div>
        <div className='flex justify-center gap-2'>
            <div className='flex flex-col items-start'>
                <span className={`mb-1 ml-1 font-medium ${isDark ? 'text-white' : 'text-black'}`}><strong>Accent</strong></span>
                <div className={`${isDark ? 'bg-zinc-800' : 'bg-white'} flex gap-2 items-center rounded-lg p-2 focus-within:border-2 focus-within:border focus-within:border-blue-500`}>
                    <input
                        id='colorSelector'
                        type="color"
                        value={color}
                        onChange={handleAccentChange}
                        className='w-6 aspect-square rounded-md focus:outline-none focus:ring-0'
                    />
                    <input
                        type="text"
                        value={color}
                        className={`focus:outline-none focus:ring-0 ${isDark ? 'text-white' : 'text-black'}`}
                        onChange={e => setColor(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex flex-col items-start'>
                <span className={`mb-1 ml-1 font-medium ${isDark ? 'text-white' : 'text-black'}`}><strong>Gray</strong></span>
                <div className={`${isDark ? 'bg-zinc-800' : 'bg-white'} flex gap-2 items-center rounded-lg p-2 focus-within:border-2 focus-within:border focus-within:border-blue-500`}>
                    <input
                        id='colorSelector'
                        onChange={handleGrayChange}
                        type="color"
                        className='w-6 aspect-square rounded-md focus:outline-none focus:ring-0'
                    />
                    <input
                        type="text"
                        className={`focus:outline-none focus:ring-0 ${isDark ? 'text-white' : 'text-black'}`}
                    />
                </div>
            </div>
            <div className='flex flex-col items-start'>
                <span className={`mb-1 ml-1 font-medium ${isDark ? 'text-white' : 'text-black'}`}><strong>Background</strong></span>
                <div className={`${isDark ? 'bg-zinc-800' : 'bg-white'} flex gap-2 items-center rounded-lg p-2 focus-within:border-2 focus-within:border focus-within:border-blue-500`}>
                    <input
                        id='colorSelector'
                        type="color"
                        onChange={handleBgChange}
                        className='w-6 aspect-square rounded focus:outline-none focus:ring-0'
                    />
                    <input
                        type="text"
                        className={`focus:outline-none focus:ring-0 ${isDark ? 'text-white' : 'text-black'}`}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
