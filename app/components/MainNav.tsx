import React from 'react'
import Logo from "../../public/assets/LOGO.svg"
import Image from 'next/image'
import Container from './Container'

const MainNav = () => {
  return (
    <>
    <Container>
    <nav className='flex justify-between items-center p-4 sticky top-0'>
      <div>
        <ul className='flex justify-between [&>li]:pr-4'>
        <li>
          <a href="/#">
            Work
          </a>
        </li>
        <li>
          <a href="/#">
            Services
          </a>
        </li>
        </ul></div>
      <div>
        <a href='/'>
        <Image className="scale-50 md:scale-75 transition-all"src={Logo} alt="Nicolas Moyano"></Image>
        </a>
        </div>
      <ul className='flex justify-between [&>li]:pr-4 '>
        <li>
          <a href="/resume">
            About
            {/* Add resume */}
          </a>
        </li>
        <li>
          <a href="/#">
            Contact
          </a>
        </li>
        </ul>
    </nav>
    </Container>
    {/* <nav className="flex items-center justify-between flex-wrap p-2">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <Image src={Logo} alt="Nico Logo" className='scale-75'/>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:w-auto md:hidden items-right">
    <div className="text-lg lg:flex-grow">
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#edfcfe] hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#edfcfe] hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#edfcfe] hover:text-white">
        Blog
      </a>
    </div>
    <div className='hidden'>
      <a href="#" className="inline-block text-sm p-4 leading-none rounded-full border border-white hover:border-transparent hover:text-[#1b355d] hover:bg-white transition-colors mt-4 lg:mt-0">Boka ett möte →</a>
    </div>
  </div>
</nav> */}
    </>
  )
}

export default MainNav