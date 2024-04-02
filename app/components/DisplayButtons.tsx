'use client';
import Link from 'next/link';
import React from 'react'

const DisplayButtons = () => {
  return (
  <div>
    <div className='text-center text-5xl p-10'>React Apps Implemented With NextJs</div>
        <div className='border border-solid m-2 border-black text-center h-96 pt-24'>
        <div className='mt-2'><Link href={"/eventcalendar"}><button type="button" className='btn'>Event Calendar</button></Link></div>
        <div className='mt-2'><Link href={"/memegenerator"}><button type="button" className='btn'>Meme Generator</button></Link></div>
        <div className='mt-2'><Link href={"/shoppingcart"}><button type="button" className='btn'>Shopping Cart</button></Link></div>
        <div className='mt-2'><Link href={"/googlelogin"}><button type="button" className='btn'>Social Login Google</button></Link></div>
    </div>
  </div>
  )
}

export default DisplayButtons