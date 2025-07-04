import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'


const Layouts = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layouts
