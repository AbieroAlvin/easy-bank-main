import data from '../data/data'


const Easybank = () => {
  return (
    <div className='bg-LightGrayishBlue max-w-[1440px] px-8 mt-8 mb-8 py-16'>
      {/* heading */}
      <div className='mb-16 md:ml-8 md:w-1/2'>
        <h1 className='md:text-4xl text-3xl font-bold mb-5 text-DarkBlue'>Why choose Easybank?</h1>
        <p className='text-[18px] text-GrayishBlue'>We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.</p>
      </div>

      {/* cards */}
      <div className='flex md:flex-row items-center justify-center flex-col gap-5 md:mx-8'>
        {
            data.map((card) => (
                <div key={card.id} className='flex flex-col md:items-start items-center md:text-left text-center gap-5'>
                    <div>
                        <img src={card.icon} alt={card.title} />
                    </div>
                    <div>
                        <h1 className='text-2xl mb-4 text-DarkBlue'>{card.title}</h1>
                        <p className='text-GrayishBlue'>{card.text}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Easybank