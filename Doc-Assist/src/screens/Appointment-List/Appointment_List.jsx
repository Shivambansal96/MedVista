import React from 'react'
import './Appointment_List.css'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import EnhancedTable from '../../components/All_List/EnhancedTable'

const Appointment_List = () => {
  return (

    <div id='appointment-list'>

        {/* <p>This page shows all patients lists.</p> */}

        <div id="top-navbar">
            <Navbar />
        </div>

        
        <div id="bottom-main">
            <div id="left-sidebar">
                <Sidebar />
            </div>
                {/* Left Side  */}

            <div id="right-main-content">

                <div id="appointment_header">
                    <h2>Appointments</h2>

                    {/* one option tag(filter) .. input tag.. submit button */}


                    {/* <br /><br /> */}
                </div>

                <div id="Patients-list-table">
                    <EnhancedTable />
                </div>

            </div>

        </div>

    </div>
  )
}

export default Appointment_List
