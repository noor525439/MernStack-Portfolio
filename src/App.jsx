import React,{ useState,useEffect } from 'react'
import Loading from './Components/Loading'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'





const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='p-0 m-0 min-h-full min-w-full'>
      <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="p-0">
          <h1 className="text-2xl font-bold"></h1>
        </div>
      )}
    </div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App