import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {Route, Routes } from 'react-router-dom';

import './App.css'
import Login from './screens/Login.jsx'
import Homepage from './screens/Homepage.jsx'
import Patients_list from './screens/Patients-List/Patients_list.jsx';
import Appointment_List from './screens/Appointment-List/Appointment_List.jsx';

function App() {

  return (
    <div id="App">


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        {/* <Route path="/appointments" element={<Homepage />} /> */}
        <Route path="/patients-list" element={<Patients_list />} />
        <Route path="/appointment-list" element={<Appointment_List />} />
      </Routes>

      {/* <Login /> */}

    </div>
  )
}

export default App
