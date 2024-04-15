import React from 'react'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Hero from '../components/Home/Hero'
import Introduction from '../components/Home/Introduction'
import SymptomSelfAssessment from '../components/Home/SymptomSelfAssessment'
import StartYourJourney from '../components/Home/StartYourJourney'
import Contact from '../components/Home/Contact'

const Home = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Introduction/>
     <SymptomSelfAssessment/>
     <Contact/>
     <StartYourJourney/>
     <Footer/> 
    </>
  )
}

export default Home
