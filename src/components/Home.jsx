import Hero from "./Hero"
import Nav from "./Nav"


const Home = () => {
  return (
    <div className='mx-auto h-full w-full flex flex-col justify-center items-center'>
      
        <Nav/>
        <Hero/>
    </div>
  )
}

export default Home