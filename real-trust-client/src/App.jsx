import { useState } from 'react'
import './App.css'
// import logo from './assets/logo.svg'; // Import the SVG file
import { Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Testimonals from './Pages/Testimonals'
import SignupForm from './Pages/SignUp'
import LoginForm from './Pages/LoginForm'
import CreateProject from './Pages/CreateProject'
import AddNewUser from './Pages/AddUser'
import AllContacts from './Pages/AllContacts'
import AllNewsLetters from './Pages/AllNewsLetters'
function App() {
// padding 1 rem in every component should be there
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/sign-up' element={<SignupForm/>}></Route>
      <Route path='/all-contacts' element={<AllContacts/>}></Route>
      <Route path='/login' element={<LoginForm />}></Route>
      <Route path='/add-project' element={<CreateProject/>}></Route>
      <Route path='/add-user' element={<AddNewUser/>}></Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/all-news-letters" element={<AllNewsLetters />} />
      <Route path="/testimonials" element={<Testimonals />} />
    </Routes>
  )
}

export default App
