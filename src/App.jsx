import './App.css'
import Articles from './components/Articles'
import Easybank from './components/Easybank'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  return (
    <>
    <div className='mx-auto h-full w-full  font-primary'>
      <Home/>
      <Easybank/>
      <Articles/>
      <Footer/>
    </div>
    </>
  )
}

export default App
