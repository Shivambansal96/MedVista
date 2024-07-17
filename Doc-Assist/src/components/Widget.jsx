import React from 'react'
import './Widget.css'
import { Link } from 'react-router-dom';
import appointment_gif from '../assets/Widget/appointment.gif'
// import patient_gif from '../assets/Widget/patient.gif'
import patient_gif from '../assets/Widget/patient.gif'
import surgery_gif from '../assets/Widget/surgery.gif'
import earning_gif from '../assets/Widget/wallet.gif'


const Widget = ({type}) => {

    let data;

    switch(type) {
        case "appointment":
            data = {
                title: "New Appointments",

                // widget_icon:  <i className="fa-solid fa-calendar-check" style={{color:'purple'}}></i>,

                widget_icon : appointment_gif,

                isMoney: false,
                amountNumber: 203,
                state: true,
                link: '26 are waiting',
                
                icon: <i className="fa-solid fa-caret-up" style={{color:'green'}}></i>                
            }
            break;

        case "patients":
            data = {
                title: "Total Patients",

                // widget_icon:  <i className="fa-solid fa-user-doctor" style={{color:'yellowgreen'}}></i>,
                widget_icon: patient_gif,

                isMoney: false,
                amountNumber: 1025,
                state: true,
                link: '150 increase',
                
                icon: <i className="fa-solid fa-caret-up" style={{color:'green'}}></i>                
            }
            break;


        case "surgery":
            data = {
                title: "Successful Surgery",

                // widget_icon:  <i className="fa-solid fa-bed-pulse" style={{color:'orangered'}}></i>,

                widget_icon: surgery_gif,

                isMoney: false,
                amountNumber: 505,
                state: true,
                link: '15 less this month',
                
                icon: <i className="fa-solid fa-caret-down" style={{color:'red'}}></i>                
            }
            break;



        case "earnings":
            data = {

                title: "Total Earnings",
           
                // widget_icon:  <i className="fa-solid fa-money-check-dollar" style={{color:'skyblue'}}></i>,             
                widget_icon: earning_gif,

                isMoney: true,
                amountNumber: 100,
                state: true,
                link: '36% increase',
                
                icon: <i className="fa-solid fa-caret-up" style={{color:'green'}}></i>                
            }
            break;

        
            default:
                break;
    }



  return (
    <div id='widget'>
        <div className="top">
            <div className="left">
                {/* <i>{data.widget_icon}</i>                 */}
                <img src={data.widget_icon} alt="" />
            </div>

            <div className="right">
                <span className='title'>{data.title}</span>

                <span className='counter'>{data.isMoney && '$'}{data.amountNumber}{data.isMoney && 'M'}{'+'}</span>
            </div>
        </div>

        <div className="down">
            {/* <i className="fa-solid fa-caret-up" ></i> */}
            {data.icon}

            <span className='link'>{data.link}</span>
        </div>
    </div>
  )
}

export default Widget



// import React from 'react';
// import './Widget.css';

// const Widget = ({ type }) => {
//     let data;

//     switch (type) {
//         case "appointment":
//             data = {
//                 title: "NEW APPOINTMENTS",
//                 isMoney: false,
//                 amountNumber: 203,
//                 color: 'green',
//                 link: '26 people are waiting',
//             };
//             break;

//         default:
//             data = {
//                 title: "DEFAULT TITLE",
//                 isMoney: false,
//                 amountNumber: 0,
//                 color: 'gray',
//                 link: 'No information available',
//             };
//             break;
//     }

//     return (
//         <div id="widget" style={{ borderColor: data.color }}>
//             <div className="top">
//                 <div className="left">
//                     <i className="fa-solid fa-user-plus"></i>
//                 </div>
//                 <div className="right">
//                     <span className="title">{data.title}</span>
//                     <span className="counter">{data.isMoney && '$'} {data.amountNumber}</span>
//                 </div>
//             </div>
//             <div className="down">
//                 <i className="fa-solid fa-caret-up"></i>
//                 <span className="link">{data.link}</span>
//             </div>
//         </div>
//     );
// }

// export default Widget;
