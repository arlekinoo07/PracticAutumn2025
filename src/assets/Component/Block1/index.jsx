import React from 'react'
import vector from '../../photo/Block1/vector.png'
import photo1 from '../../photo/Block1/photo1.png'
import { MoveRight } from 'lucide-react';

const Block1Component = () => {
  return (
    <div>
        <div className='relative'>
            <img src={vector} className='w-full absolute mt-[114px]'></img>
        </div>
        <div className='relative flex h-[625px]'>
            <div className='flex flex-col gap-6 ml-40 mt-30 z-10'>
                <p className='text-[56px] font-semibold text-[#111029] whitespace-pre-line leading-tight'>{`Make your business\n`}<span className='text-[#FF6800]'>more powerful</span>{`\nwith us`}</p>
                <p className='whitespace-pre-line text-[#6B6B6B] text-[18px]'>{`We provide various services to make\n your business grow and get bigger. Your\n satisfaction is our first priority.`}</p>
                <button className='flex items-center justify-center gap-3 bg-[#4C40F7] w-[200px] h-16 text-white text-[16px] rounded-xl cursor-pointer shadow-[5px_10px_30px_rgba(76,64,247,0.50)]'>Get Started<MoveRight/></button>
            </div>
            <img src={photo1} className='absolute bottom-0 right-10 z-0'></img>
        </div>

    </div>
  )
}

export default Block1Component