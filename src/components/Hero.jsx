import mockup from '../assets/images/image-mockups.png'
import bgDesk from '../assets/images/bg-intro-desktop.svg'
import bgMobile from '../assets/images/bg-intro-mobile.svg'

const Hero = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse items-center overflow-hidden '>

       {/* details */}
       <div className='flex flex-col md:items-start items-center gap-4 md:gap-6 px-8 md:px-16 md:w-1/2 md:ml-8 md:text-left text-center'>
         <h1 className='md:text-5xl text-3xl text-DarkBlue'>Next generation digital banking</h1>
         <p className='md:text-[18px] text-[16px] text-GrayishBlue'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
         <button className="rounded-full text-[16px] px-8 py-3 bg-gradient-to-r from-LimeGreen to-BrightCyan text-white w-1/2"><p>Request Invite</p></button>
       </div>
       {/* image */}
       <div className='relative'>
        <img src={mockup} alt="mockup" className='relative top-[-1rem] right-[-2.5rem] md:right-[-3.5rem]'/>
         <div className='absolute top-0 right-0 md:right-[-12rem] z-[-1] '>
           <img src={bgDesk} alt=" background desktop"  className='hidden md:flex scale-y-[1.4] scale-x-[1.2]'/>
           <img src={bgMobile} alt="background mobile"  className='md:hidden flex scale-[1.8]'/>
         </div>
       </div>
    </div>
  )
}

export default Hero