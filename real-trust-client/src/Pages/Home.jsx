import React from 'react'
import Navbar from '../Components/Navbar'
import SectionOne from '../Components/SectionOne'
import SectionTwo from '../Components/SectionTwo'
import SectionThree from '../Components/SectionThree'
import Footer from '../Components/Footer'
import HappyClients from '../Components/HappyClients'
import ProjectList from './ProjectList'
import { Toaster } from 'react-hot-toast'

const Home = () => {
  return (
    <>
      <Toaster/>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <ProjectList/>
      <HappyClients />
      <Footer />
    </>
  )
}

export default Home