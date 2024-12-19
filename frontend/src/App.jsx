import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors';
import Login from './Pages/Login';
import About from './Pages/About';
import Myprofile from './Pages/Myprofile';
import Myappointents from './Pages/Myappointents';
import Appointment from './Pages/Appointment';
import Contact from './Pages/Contactus'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<Myprofile/>} />
        <Route path='/my-appointments' element={<Myappointents/>} />
        <Route path='/appointment/:docId' element={<Appointment/>} />
      </Routes>
    </div>
  )
}

export default App
