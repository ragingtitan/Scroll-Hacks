import { useState } from 'react'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import NotFound from './components/NotFound.jsx';
import Pricing from './components/Pricing.jsx';
import Features from './components/Features.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';

function App() {


  return (
    <>
    
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col">
      
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/"  element={<Features/>}/>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/forgot' element={<ForgotPassword/>}></Route>
          <Route path='/reset' element={<ResetPassword/>}></Route>
          <Route path='/*' element={<NotFound/>}></Route>
          <Route path='/pricing' element={<Pricing/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
          <Footer/>
      </BrowserRouter>
     
    </div>
      <ToastContainer />      
    </>
  )
}

export default App
