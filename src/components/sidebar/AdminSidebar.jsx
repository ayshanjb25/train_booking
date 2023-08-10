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

const AdminSidebar = () => {
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
                        <span>Station Details</span>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <span>Train Details</span>
                    </li>
                    <li>
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
                    </li>
                    <p className="title">REVENUE MANAGEMENT</p>
                    <li>
                        <StackedBarChartOutlinedIcon className='icon'/>
                        <span>Ticket Sales</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <span>Promotions</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span>Discount</span>
                        
                    </li>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span>Revenue</span>
                        
                    </li>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span>Expenses</span>
                        
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>    
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon'/>
                        <span>Logout</span>
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