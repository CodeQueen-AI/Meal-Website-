import React from 'react'
import Navbar from './Navbar/page'
import Home from './Home/page'
import Menu from './Menu/page'
import About from './About/page'
import Special from './Specilaity/page'
import Service from './Service/page'
import Footer from './Footer/page'


function page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Menu/>
      <About/>
      <Special/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default page;
