import React from 'react'
import './sidebar.scss'
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
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'><span className="logo">BookMyTrain</span></div>
            <hr/>
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span className='link'>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <Link className='link' to="/admin/station">Station Details</Link>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <Link className='link' to="/admin/train">Train Details</Link>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <Link className='link' to="/admin/users">User Details</Link>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <Link className='link' to="/admin/passenger">Passenger Details</Link>
                    </li>
                    {/* <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <span>Passenger Details</span>
                    </li>
                    <li>
                        <ShoppingCartOutlinedIcon className='icon'/>
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardOutlinedIcon className='icon'/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className='icon'/>
                        <span>Delivery</span>
                    </li> */}
                    <p className="title">PASSENGER MANAGEMENT</p>
                    <li>
                        <StackedBarChartOutlinedIcon className='icon'/>
                        <Link className='link' to="/admin/passenger-info">Passenger</Link>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <Link className='link' to="/admin/passengertravelhistory">Travel History</Link>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span className='link'>Discount</span>
                        
                    </li>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span className='link'>Revenue</span>
                        
                    </li>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span className='link'>Expenses</span>
                        
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon'/>
                        <span className='link'>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon'/>
                        <span className='link'>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>    
                        <Link className='link' to="/admin-profile">Profile</Link>
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

export default AdminSidebar;