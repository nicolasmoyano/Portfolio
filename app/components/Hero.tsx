import React from 'react'
import supabase from '../../supabase'

const Hero = () => {
  return (
    <>
    <section className='flex h-[calc(100vh-100px)] justify-center items-center'>
        <h1 className='text-[5rem] font-semibold leading-snug'>Hi! I'm Nico, <br /> A product designer @ <span className='text-blue-700'>
        Nordnet</span>. Based in Stockholm.
        </h1>
    </section>
    </>
  )
}

export default Hero