import React from 'react'

import amazon from '../../photo/Block6/amazon.svg'
import areem from '../../photo/Block6/areem.svg'
import bitcoin from '../../photo/Block6/bitcoin.svg'
import canon from '../../photo/Block6/canon.svg'
import fedEx from '../../photo/Block6/fedEx.svg'

import hubSpot from '../../photo/Block6/hubSpot.svg'
import jeep from '../../photo/Block6/jeep.svg'
import jQuery from '../../photo/Block6/jQuery.svg'
import philips from '../../photo/Block6/philips.svg'
import pirelli from '../../photo/Block6/pirelli.svg'

const Block6Component = () => {
  return (
    <div className='mt-[200px]'>
      <div className='flex flex-col gap-20'>
        <div className='text-center flex flex-col gap-5'>
          <p className='font-semibold text-[20px] text-[#FF2D59]'>Some of Our Great Customers</p>
          <p className='font-semibold text-[42px]'>Some of the companies we have worked with</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-[60px]'>
          <div className='flex gap-10'>
            <img src={amazon}></img>
            <img src={areem}></img>
            <img src={bitcoin}></img>
            <img src={canon}></img>
            <img src={fedEx}></img>
          </div>
          <div className='flex gap-8'>
            <img src={hubSpot}></img>
            <img src={jeep}></img>
            <img src={jQuery}></img>
            <img src={philips}></img>
            <img src={pirelli}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Block6Component