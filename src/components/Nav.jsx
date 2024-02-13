import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../assets/images/logo.svg'

const Nav = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => setOpen(!open)
  return (
    <div className="mx-auto w-full bg-white shadow-lg">
    <nav className="w-full h-[80px] mx-auto flex justify-between items-center py-4 px-2 max-w-[1240px] ">
      {/* Left Side */}
      <div className="flex items-center justify-between w-full md:w-auto px-4">
      <img src={Logo} alt="Logo" />
        {/* open & close */}
        <div onClick={() => handleClick()} className="md:hidden z-40">
                    {open ? (<FaTimes size={25} className="text-gray-400 cursor-pointer" />) : (<FaBars size={25} className="text-gray-400 cursor-pointer" />)}
                </div>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex">
      <ul className="flex justify-between space-x-10 text-black  text-[14px] items-center">
              <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  Careers
                </a>
              </li>
            </ul>
      </div>

      {/* Button */}
      <div className="hidden md:flex">
            <button className="rounded-full text-[16px] px-8 py-3 bg-gradient-to-r from-LimeGreen to-BrightCyan text-white"><p>Request Invite</p></button>
       </div>

      {/* Mobile Menu */}
      {/* overlay */}
      {open ? (
            <div className="bg-DarkBlue/60 fixed w-full h-screen z-20 top-[80px] left-0"></div>
          ) : (
            ""
          )}

      {/* Side drawer menu */}
      <div className={`fixed top-[100px] w-3/4 h-[40%] z-50  duration-500 bg-White ease-in-out p-[24px] rounded-md ${open ? "left-[80px]" : "left-[-100%]"}`}>
            <ul className="flex flex-col justify-between text-center gap-6 text-black font-bold">
            <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Careers
                </a>
              </li>
            </ul>
          </div>
    </nav>
  </div>
  )
}

export default Nav