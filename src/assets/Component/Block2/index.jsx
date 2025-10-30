import React from 'react'
import { ArrowRight } from 'lucide-react';
import vector from '../../photo/Block2/vector.png'

import ideate from '../../photo/Block2/ideate.svg'

import design from '../../photo/Block2/design.svg'

import webDev from '../../photo/Block2/webDev.svg'

import appDev from '../../photo/Block2/appDev.svg'

import business from '../../photo/Block2/business.svg'

import digital from '../../photo/Block2/digital.svg'

const Block2Component = () => {
  return (
    <div className='relative'>
        <div className='relative z-0'>
            <img src={vector} className='absolute top-170 -z-40 w-full'></img>
        </div>
        <div className='mt-[150px] z-20 relative'>
            <div className='flex flex-col items-center justify-center gap-[60px]'>
                <div className='flex flex-col gap-5'>
                    <p className='font-semibold text-[20px] text-[#FF2D59] text-center'>Our Services</p>
                    <p className='whitespace-pre-line font-semibold text-[42px] text-[#111029] leading-13 text-center'>{`The various services we provide to make your\n business more powerful`}</p>
                </div>
                <div className='flex z-10'>
                    <div className='w-[352px] h-[458px] rounded-[20px] flex flex-col items-center justify-center shadow-[-10px_30px_70px_#DBDEE1] gap-11 bg-white'>
                        <img src={ideate}></img>
                        <div className='flex flex-col gap-4 text-center'>
                            <p className='text-[#111029] text-[20px] font-semibold'>Ideate</p>
                            <p className='whitespace-pre-line text-[#6B6B6B] text-[18px]'>{`We help you develop creative\n ideas so that your business can\n grow more rapidly`}</p>
                        </div>
                        <button className='text-[#4C40F7] bg-[#F3F4F6] w-[45px] h-[45px] rounded-full items-center justify-center flex cursor-pointer'><ArrowRight/></button>
                    </div>
                    <div className='w-[352px] h-[458px] rounded-[20px] flex flex-col items-center justify-center shadow-[-10px_30px_70px_#DBDEE1] gap-11 bg-white'>
                        <img src={design}></img>
                        <div className='flex flex-col gap-4 text-center'>
                            <p className='text-[#111029] text-[20px] font-semibold'>Design</p>
                            <p className='whitespace-pre-line text-[#6B6B6B] text-[18px]'>{`We provide services with the\n best designs than our designer\n team for your business`}</p>
                        </div>
                        <button className='text-[#4C40F7] bg-[#F3F4F6] w-[45px] h-[45px] rounded-full items-center justify-center flex cursor-pointer'><ArrowRight/></button>
                    </div>
                    <div className='w-[352px] h-[458px] rounded-[20px] flex flex-col items-center justify-center shadow-[-10px_30px_70px_#DBDEE1] gap-11 bg-white'>
                        <img src={webDev}></img>
                        <div className='flex flex-col gap-4 text-center'>
                            <p className='text-[#111029] text-[20px] font-semibold'>Web Development</p>
                            <p className='whitespace-pre-line text-[#6B6B6B] text-[18px]'>{`We help develop company\n websites to be more\n professional and attractive`}</p>
                        </div>
                        <button className='text-[#4C40F7] bg-[#F3F4F6] w-[45px] h-[45px] rounded-full items-center justify-center flex cursor-pointer'><ArrowRight/></button>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-[352px] h-[458px] rounded-[20px] flex flex-col items-center justify-center shadow-[-10px_30px_70px_#DBDEE1] gap-11 bg-white'>
                        <img src={appDev}></img>
                        <div className='flex flex-col gap-4 text-center'>
                            <p className='text-[#111029] text-[20px] font-semibold'>App Development</p>
                            <p className='whitespace-pre-line text-[#6B6B6B] text-[18px]'>{`We help develop company\n mobile apps to be more\n professional and attractive`}</p>
                        </div>
                        <button className='text-[#4C40F7] bg-[#F3F4F6] w-[45px] h-[45px] rounded-full items-center justify-center flex cursor-pointer'><ArrowRight/></button>
                    </div>
                    <div className='w-[352px] h-[458px] rounded-[20px] flex flex-col items-center justify-center shadow-[-10px_30px_70px_#DBDEE1] gap-11 bg-white'>
                        <img src={business}></img>
                        <div className='flex flex-col gap-4 text-center'>
                            <p className='text-[#111029] text-[20px] font-semibold'>Business Growth</p>
                            <p className='whitespace-pre-line text-[#6B6B6B] text-[18px]'>{`We also provide services by\n providing input for your\n business growth`}</p>
                        </div>
                        <button className='text-[#4C40F7] bg-[#F3F4F6] w-[45px] h-[45px] rounded-full items-center justify-center flex cursor-pointer'><ArrowRight/></button>
                    </div>
                    <div className='w-[352px] h-[458px] rounded-[20px] flex flex-col items-center justify-center shadow-[-10px_30px_70px_#DBDEE1] gap-11 bg-white'>
                        <img src={digital}></img>
                        <div className='flex flex-col gap-4 text-center'>
                            <p className='text-[#111029] text-[20px] font-semibold'>Digital marketing</p>
                            <p className='whitespace-pre-line text-[#6B6B6B] text-[18px]'>{`We also help you market your\n products through an online\n marketplace`}</p>
                        </div>
                        <button className='text-[#4C40F7] bg-[#F3F4F6] w-[45px] h-[45px] rounded-full items-center justify-center flex cursor-pointer'><ArrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Block2Component