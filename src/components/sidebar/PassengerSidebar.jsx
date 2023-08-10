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
            <div className='top'><span className="logo">Book Your Train</span></div>
            <hr/>
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <Link className='link' to="/book">Book Seats</Link>
                    </li>
                    <li>
                        <ShoppingCartOutlinedIcon className='icon'/>
                        <Link className='link' to="/book">Track Train</Link>
                    </li>
                    <li>
                        <CreditCardOutlinedIcon className='icon'/>
                        <Link className='link' to="/passengerInfo">Booking History</Link>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className='icon'/>
                        <Link className='link' to="/book">Cart</Link>
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
                    </li>
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
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>  
                        <Link className='link' to="/user">Profile</Link>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon'/>
                        <Link className='link' to="/login">Logout</Link>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default PassengerSidebar;