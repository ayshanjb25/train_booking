import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';

const Navbar = () => {
    return (


        <div className='navbar'>
            <div className="wrapper" >
              <div style={{display:"flex", flexDirection:"row",  gap:"10px" }}>
                <img src="./images/logo.png" alt="logo"/>
               </div>  
               <div style={{display:"flex", flexDirection:"row",  gap:"10px",justifyContent:"center",alignItems:"center"}}><p>Already have an Account?</p>
                <Button variant="outline" color="blue" > <Link to="/login" style={{textDecoration:'none'}}>Login</Link></Button><p> or </p>
               <Button variant="outline" color="blue" > <Link to="/register" style={{textDecoration:'none'}}>Register</Link></Button>
            </div>
            </div>
            </div>

     
    );
};

export default Navbar;