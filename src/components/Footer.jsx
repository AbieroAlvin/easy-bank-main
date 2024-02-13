import Logo from '../assets/images/logo.svg'
import { FaInstagram, FaSquareFacebook, FaYoutube, FaSquareTwitter, FaPinterest  } from "react-icons/fa6";

const Footer = () => {
  return (
     <div className='w-full mx-auto flex md:flex-row flex-col justify-center items-center md:p-12 p-8 bg-DarkBlue'>
        <div className='flex justify-between md:flex-row flex-col md:gap-24'>
        <div className='flex md:flex-row flex-col w-full justify-between md:gap-24 gap-8'>
            <div className='flex flex-col gap-8'>
               <img src={Logo} alt="logo" className='w-[150px] stroke-white'/>
               <div className='flex gap-5 text-White'>
               <FaSquareFacebook size={25} className='cursor-pointer hover:scale-75'/>
               <FaYoutube size={25} className='cursor-pointer hover:scale-75'/>
               <FaSquareTwitter size={25} className='cursor-pointer hover:scale-75'/>
               <FaPinterest size={25} className='cursor-pointer hover:scale-75'/>
               <FaInstagram size={25} className='cursor-pointer hover:scale-75'/>
               </div>
            </div>
            {/* links */}
            <div className='text-[14px] flex md:flex-row flex-col md:gap-16 gap-8'>
                <div>
                    <ul>
                        <li className='cursor-pointer text-LightGrayishBlue hover:text-GrayishBlue'>About Us</li>
                        <li className='cursor-pointer text-LightGrayishBlue hover:text-GrayishBlue'>Contact</li>
                        <li className='cursor-pointer text-LightGrayishBlue hover:text-GrayishBlue'>Blog</li>
                    </ul>
                </div>
                <div>
                <ul>
                    <li className='cursor-pointer text-LightGrayishBlue hover:text-GrayishBlue'>Careers</li>
                    <li className='cursor-pointer text-LightGrayishBlue hover:text-GrayishBlue'>Support</li>
                    <li className='cursor-pointer text-LightGrayishBlue hover:text-GrayishBlue'>Privacy Policy</li>
                </ul>
                </div>
            </div>
        </div>
        <div className='w-full md:ml-12 md:mt-0 mt-4'>
        <button className="rounded-full text-[16px] px-8 py-3 bg-gradient-to-r from-LimeGreen to-BrightCyan text-white mb-4 hover:opacity-85"><p>Request Invite</p></button>
            <p className='text-GrayishBlue text-[15px]'>© Easybank. All Rights Reserved</p>
        </div>
    </div>
     </div>
     
   
  )
}

export default Footer