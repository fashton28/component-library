import React from 'react'
import tinycolor from 'tinycolor2'

const Palete = ({ color, setColor, gray }) => {
  // Generate an array of lighter and darker shades
  // 3 lighter, 1 original, 2 darker
  
  const shadesAccent = [
    tinycolor(color).darken(40).toHexString(),
    tinycolor(color).darken(25).toHexString(),
    tinycolor(color).darken(10).toHexString(),
    color,
    tinycolor(color).lighten(10).toHexString(),
    tinycolor(color).lighten(20).toHexString(),
    tinycolor(color).lighten(30).toHexString(),
    tinycolor(color).lighten(40).toHexString(),
  ];
  
  const shadesGray = [
    tinycolor(gray).darken(40).toHexString(),
    tinycolor(gray).darken(25).toHexString(),
    tinycolor(gray).darken(10).toHexString(),
    gray,
    tinycolor(gray).lighten(10).toHexString(),
    tinycolor(gray).lighten(20).toHexString(),
    tinycolor(gray).lighten(30).toHexString(),
    tinycolor(gray).lighten(40).toHexString(),
  ];

  return (
    <div className='flex flex-col gap-2 justify-center'>
      <div className='flex  gap-2 justify-center items-center'>
        {shadesAccent.map((shade, idx) => (
          <div
            key={idx}
            className='w-25 h-15 transition-colors duration-150 rounded cursor-pointer border-4 border-transparent hover:border-white'
            style={{ backgroundColor: shade }}
            onClick={() => setColor(shade)}
          />
        ))}
      </div>
      <div className='flex  gap-2 justify-center items-center'>
        {shadesGray.map((shade, idx) => (
            <div
                key={idx}
                className='w-25 h-15 transition-colors duration-150 rounded cursor-pointer border-4 border-transparent hover:border-white'
                style={{ backgroundColor: shade }}
                onClick={() => setColor(shade)}
            />
            ))}
      </div>
    </div>
  )
}

export default Palete
