import React from 'react'
import './sidebar.scss'
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const PassengerSidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className="logo">BookMyTrain</span>
                </div>
            <hr/>
            <div className='center'>
                <ul style={{marginLeft:'10px'}}>
                    <p className="title" style={{marginTop:'30px'}}>MAIN</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <Link  className='link' to="/home">Dashboard</Link>
                    </li>
                    <p className="title" style={{marginTop:'30px'}}>LISTS</p>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <Link className='link' to="/bookseat">Book Seats</Link>
                    </li>
                    {/* <li>
                        <ShoppingCartOutlinedIcon className='icon'/>
                        <Link className='link' to="/trackTrain">Track Train</Link>
                    </li> */}
                    <li>
                        <CreditCardOutlinedIcon className='icon'/>
                        <Link className='link' to="/travelhistory">Booking History</Link>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className='icon'/>
                        <Link className='link' to="/book">Payment</Link>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className='icon'/>
                        <Link className='link' to="/book">Loyalty</Link>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className='icon'/>
                        <Link className='link' to="/book">Preferences</Link>
                    </li></div>
                    {/* <p className="title">USEFUL</p>
                    <li>
                        <StackedBarChartOutlinedIcon className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <span>Notifications</span>
                    </li> */}
                    {/* <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon'/>
                        <span>Settings</span>
                    </li> */}
                    <p className="title" style={{marginTop:'30px'}}>USER</p>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>  
                        <Link className='link' to="/user">Profile</Link>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon'/>
                        <Link className='link' to="/login">Logout</Link>
                    </li></div>
                </ul>
            </div>
            {/* <div className='bottom'>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div> */}
        </div>
    )
}
  
export default PassengerSidebar;