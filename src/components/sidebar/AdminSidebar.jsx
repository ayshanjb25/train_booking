import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
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
                <ul style={{marginLeft:'10px'}}>
                    <p className="title" style={{marginTop:'30px'}}>MAIN</p>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <li>
                        <DashboardIcon className='icon'/>
                        <Link className='link' to="/admin">Dashboard</Link>
                    </li>
                    </div>
                    <p className="title" style={{marginTop:'30px'}}>LISTS</p>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
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
                        <Link className='link' to="/admin/trackTrain">Track Trains</Link>
                    </li>
                    
                    </div>
                    <p className="title" style={{marginTop:'30px'}}>PASSENGER MANAGEMENT</p>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <Link className='link' to="/admin/passenger">Passenger Details</Link>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <Link className='link' to="/admin/passengertravelhistory">Travel History</Link>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <Link className='link' to="/admin/loyalty">Passenger Loyalty</Link>
                    </li></div>
                    <p className="title" style={{marginTop:'30px'}}>SERVICE</p>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span className='link'>Discount</span>
                        
                    </li>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <Link className='link' to="/admin/revenue">Revenue</Link>
                        
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
                    </li></div>
                    <p className="title" style={{marginTop:'30px'}}>USER</p>
                    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                    <li>
                        <AccountCircleOutlinedIcon className='icon'/>    
                        <Link className='link' to="/admin-profile">Profile</Link>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon'/>
                        <Link className='link' to="/login">Logout</Link>
                    </li></div>
                </ul>
            </div>
        </div>
    )
}

export default AdminSidebar;