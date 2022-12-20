import Image from 'next/image'
import React from 'react'

function MediumCard({img,title}) {
    console.log("Medium card", img)
  return (
    <div className=' cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
       <div className='relative h-80 w-80'>
            <Image
                className='rounded-xl' 
                src={img}
                fill
            />
       </div>
       <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard