import { useState } from 'react'
import "font-awesome/css/font-awesome.min.css";
import Header from './Components/Header'
import Project from "./Components/Project"
import Footer from './Components/Footer'
import About from './Components/About'
import QualitySection from './Components/QualitySection'
import ReliableSolutions from './Components/ReliableSolutions';
import OurServices from './Components/OurServices';
import Testimonial from './Components/Testimonial';
import HeroSection from './Components/HeroSection';



function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <About/>
      <OurServices/>
      <QualitySection/>
      <ReliableSolutions/>
      <Project/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
