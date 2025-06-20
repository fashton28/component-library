import React from 'react'
import tinycolor from 'tinycolor2'

const Palete = ({ color, setColor }) => {
  // Generate an array of lighter and darker shades
  // 3 lighter, 1 original, 2 darker
  const shades = [
    tinycolor(color).lighten(30).toHexString(),
    tinycolor(color).lighten(15).toHexString(),
    tinycolor(color).lighten(7).toHexString(),
    color,
    tinycolor(color).darken(10).toHexString(),
    tinycolor(color).darken(20).toHexString(),
  ];

  return (
    <div className='flex flex-col justify-center'>
      <div className='flex  gap-1 justify-center items-center'>
        {shades.map((shade, idx) => (
          <div
            key={idx}
            className='w-25 h-15 transition-colors duration-150 rounded cursor-pointer border-4 border-transparent hover:border-white'
            style={{ backgroundColor: shade }}
            onClick={() => setColor(shade)}
          />
        ))}
      </div>
      <div>
        {/* Additional content if needed */}
      </div>
    </div>
  )
}

export default Palete
