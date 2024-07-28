import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 flex- bg-black py-5 items-center'>
      
       <p className='text-sm text-white'>All rights reserved. Copyright @explorer</p>
      <div className='flex mt-4' >
        <Image src={assets.facebook_icon} alt='' width={30}/>
        <Image src={assets.twitter_icon} alt='' width={30}/>
        <Image src={assets.googleplus_icon} alt='' width={30}/>
        

      </div>
    </div>
  )
}

export default Footer
