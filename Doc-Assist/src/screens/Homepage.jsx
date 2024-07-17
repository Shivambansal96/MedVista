import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'
import Chart from '../components/Chart/Chart.jsx'
// import { Table } from '@mui/material'
import Table from '../components/Table/Table.jsx'
import StackedAreaChart from '../components/EarningChart/EarningChart.jsx'
import HorizontalBars from '../components/EarningChart/EarningChart.jsx'
import DataTable from '../components/All_List/EnhancedTable.jsx'



const Homepage = () => {
  return (
    <div id='homepage'>
        {/* Homepage */}

        <div id="top-navbar">
            <Navbar />
        </div>

        <div id="bottom-main">
            <div id="left-sidebar">
                <Sidebar /> 
                {/* Left Side  */}
            </div>

            <div id="right-main-content">
                {/* Right Side */}

                <div id="top-widgets">
                    <div className="top">

                        <h1>Overview</h1>

                        <div className="date">
                            {/* <p>May 2023</p> */}

                            <select name="" id="">
                                    <option value="2023-2024">2023 -2024</option>
                                    <option value="2022-2023">2022 -2023</option>
                                    <option value="2021-2022">2021 -2022</option>
                                    <option value="2020-2021">2020 -2021</option>
                                    <option value="2019-2020">2019 -2020</option>
                                </select>
                        </div>
                    </div>

                    <div className="bottom">
                        <Link to='/appointments'>
                            <Widget type='appointment'/>
                        </Link>

                        <Link to='/patients-list'>
                            <Widget type='patients'/>
                        </Link>

                        <Link to='/surgeries'>
                            <Widget type='surgery'/>
                        </Link>

                        <Link to='/earnings'>
                            <Widget type='earnings'/>
                        </Link>
                    </div>

                </div>


                <div id="mid-graphs">
                    <div className="left">
                        <div className="top">
                            <h1>Patients Activity</h1>

                            <div className="date">
                                {/* <p>2022 - 2023</p> */}

                                <select name="" id="">
                                    <option value="2023-2024">2023 -2024</option>
                                    <option value="2022-2023">2022 -2023</option>
                                    <option value="2021-2022">2021 -2022</option>
                                    <option value="2020-2021">2020 -2021</option>
                                    <option value="2019-2020">2019 -2020</option>
                                </select>

                            </div>

                        </div>

                        <div className="bottom">
                            {/* <Chart /> */}
                            <Chart aspect={2 / 1} />
                        </div>
                    </div>

                    <div className="right">

                        <div className="top">
                            <h1>Total Earnings</h1>

                            <div className="date">
                                {/* <p>2022 - 2023</p> */}

                                <select name="" id="">
                                    <option value="2023-2024">2023 -2024</option>
                                    <option value="2022-2023">2022 -2023</option>
                                    <option value="2021-2022">2021 -2022</option>
                                    <option value="2020-2021">2020 -2021</option>
                                    <option value="2019-2020">2019 -2020</option>
                                </select>
                            </div>

                        </div>

                        <div className="bottom">
                            {/* <Chart aspect={2 / 1} /> */}
    {/* <EarningChart /> */}    <HorizontalBars />
                        </div>

                    </div>
                </div>


                <div id="bottom-table">
                    {/* table */}
                    {/* <Table /> */}
                    <DataTable />
                </div>




            </div>
        </div>










    </div>
  )
}
 
export default Homepage
