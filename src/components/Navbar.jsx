import React,{useState} from 'react'
import {close, logo,menu} from '../asset'
import {navLinks} from '../constants'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img className='w-[124px] h-[32px] ml-10 sm:ml-0' src={logo} alt="" />
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
           {navLinks.map((nav,index)=>(
          <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${index === navLinks.length - 1 ? 'mr-0':'mr-10'} `} key={nav.id}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
           ))} 
        </ul>
        <div className='px-10 sm:hidden flex flex-1 justify-end items-center'>
          <img onClick={()=>setToggle(prev=>!prev)} src={toggle ? close: menu} className='object-contain cursor-pointer w-[28px] h-[28px] ' alt="" />

        </div>
        <div className={`${toggle ? 'flex':'hidden'}  p-6 bg-black-gradient absolute top-20 mx-4 my-2 right-0 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col  justify-end items-center flex-1'>
           {navLinks.map((nav,index)=>(
          <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${index === navLinks.length - 1 ? 'mr-0':'mb-10'} `} key={nav.id}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
           ))} 
        </ul>
        </div>
    </nav>
  ) 
}

export default Navbar