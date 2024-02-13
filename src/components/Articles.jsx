import articlesData from '../data/articles'

const Articles = () => {
  return (
    <div className='px-8 my-16'>
        <div className='ml-8 mb-16'>
            <h1 className='text-4xl text-DarkBlue md:text-left text-center'>Latest Articles</h1>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-1 items-center justify-center gap-4 md:mx-8 '>
           {
            articlesData.map((articles) => (
                <div key={articles.id} className='shadow-lg rounded-lg cursor-pointer hover:scale-105'>
                    <div>
                        <img src={articles.image} alt={articles.id} className='rounded-t-lg object-fit'/>
                    </div>
                    <div className='px-4 py-6 flex flex-col gap-3  '>
                        <p className='text-[12px] text-GrayishBlue'>By {articles.author}</p>
                        <h2 className='text-xl text-DarkBlue'>{articles.title}</h2>
                        <p className='text-[13.5px] text-GrayishBlue'>{articles.text}</p>
                    </div>
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default Articles