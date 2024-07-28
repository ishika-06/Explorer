import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100 '>
      <div className='border border-black '>
        <Image src={assets.logo} width={70} alt='' />
      </div>

      <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>

        <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium px-2 py-2 bg-white shadow-[-5px_5px_0px_#000000'>
          <Image src={assets.add_icon} alt='' width={28} /><p>Add Blogs</p>
        </Link>

        <Link href='/admin/blogList' className='mt-5 flex items-center border border-black gap-3 font-medium px-2 py-2 bg-white shadow-[-5px_5px_0px_#000000'>
          <Image src={assets.blog_icon} alt='' width={28} /><p>Blog List</p>
        </Link>

        <Link href='/admin/subscriptions' className='mt-5 flex items-center border border-black gap-3 font-medium px-2 py-2 bg-white shadow-[-5px_5px_0px_#000000'>
          <Image src={assets.email_icon} alt='' width={28} /><p>Subscriptions</p>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
