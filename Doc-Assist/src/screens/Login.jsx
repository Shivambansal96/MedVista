// import React from "react";
// import "./Login.css";
// import { Link } from "react-router-dom";
// // import {Male_doc} from '../assets/male_doc'
// import Male_doc from '../assets/male_doc.png'
// import { red } from "@mui/material/colors";
// import app_logo from '../assets/medVista_logo.png'

// const Login = () => {
//   return (
//     <div id="login_page">
//       {/* This is the login page or Default page */}

//       <div id="doctor_avatar">
//         <img src={Male_doc} alt="Doctor Avatar" />

//         {/* <iframe src='https://my.spline.design/roomgirlreadingcopy-956223557f9947d30d37387cacc12398/' frameborder='0' width='100%' height='100%'></iframe> */}

//       {/* <spline-viewer url="https://my.spline.design/roomgirlreadingcopy-956223557f9947d30d37387cacc12398/"></spline-viewer> */}

//       {/* <spline-viewer url="https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode" events-target="global"></spline-viewer> */}

//       {/* <spline-viewer url="https://prod.spline.design/fJ2ptJKzT-sDkpfO/scene.splinecode" background="rgba(218,81,221,0.2)"></spline-viewer> */}
      

      


        
//       </div>

//       {/* FORM STARTS  */}
//       <div id="form_right">

//         <div className="form-container">
//           <div id="Logo">
//             <img src={app_logo} alt="" />
//           </div>

//           {/* <p className="title">
//             <span style={{color:'rgb(219, 58, 58)'}}>Med</span>
//             <span style={{color:'rgb(7, 183, 218)'}}>Vista</span>
//           </p> */}

//           <form className="form">
//             <input type="email" className="input" placeholder="Email" />
//             <input type="password" className="input" placeholder="Password" />
//             <p className="page-link">
//               <span className="page-link-label">Forgot Password?</span>
//             </p>

//             <Link to="/homepage" style={{ textAlign: "center" }}>
//               <button className="form-btn">Log in</button>
//             </Link>
//           </form>

//           <p className="sign-up-label">
//             Don't have an account?   &nbsp;&nbsp;
//             <span className="sign-up-link">Sign up</span>
//           </p>

//           <div className="buttons-container">
//             <div className="apple-login-button">
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 stroke-width="0"
//                 className="apple-icon"
//                 viewBox="0 0 1024 1024"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
//               </svg>
//               <span>Log in with Apple</span>
//             </div>
//             <div className="google-login-button">
//               <svg
//                 stroke="currentColor"
//                 fill="currentColor"
//                 stroke-width="0"
//                 version="1.1"
//                 x="0px"
//                 y="0px"
//                 className="google-icon"
//                 viewBox="0 0 48 48"
//                 height="1em"
//                 width="1em"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill="#FFC107"
//                   d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
//                   c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
//                   c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//                 ></path>
//                 <path
//                   fill="#FF3D00"
//                   d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
//                 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
//                 ></path>
//                 <path
//                   fill="#4CAF50"
//                   d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
//                   c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
//                 ></path>
//                 <path
//                   fill="#1976D2"
//                   d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
//                   c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
//                 ></path>
//               </svg>
//               <span>Log in with Google</span>
//             </div>
//           </div>

//         </div>

//       </div>

//       {/* PAGE STARTS  */}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Female_doc from '../assets/female_doc.png';
import Male_doc from '../assets/male_doc.png';
import app_logo from '../assets/medVista_logo.png';

const Login = () => {
  const [gender, setGender] = useState("Male");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div id="login_page">
      {/* This is the login page or Default page */}

      <div id="doctor_avatar">
        <img src={gender === "Male" ? Male_doc : Female_doc} alt="Doctor Avatar" />
      </div>

      {/* FORM STARTS  */}
      <div id="form_right">
        <div className="form-container">
          <div id="Logo">
            <img src={app_logo} alt="App Logo" />
          </div>

          <form className="form">
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
            
            <div className="dropdown-container">
              <label htmlFor="gender">Gender: </label>
              <select id="gender" value={gender} onChange={handleGenderChange} className="input">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            
            <p className="page-link">
              <span className="page-link-label">Forgot Password?</span>
            </p>

            <Link to="/homepage" style={{ textAlign: "center" }}>
              <button className="form-btn">Log in</button>
            </Link>
          </form>

          <p className="sign-up-label">
            Don't have an account? &nbsp;&nbsp;
            <span className="sign-up-link">Sign up</span>
          </p>

          <div className="buttons-container">
            <div className="apple-login-button">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                className="apple-icon"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
              </svg>
              <span>Log in with Apple</span>
            </div>
            <div className="google-login-button">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                x="0px"
                y="0px"
                className="google-icon"
                viewBox="0 0 48 48"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                  c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                  c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                  c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                  c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              <span>Log in with Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
