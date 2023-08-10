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

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchOutlinedIcon className='icon'/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon'/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className='icon'/>
                        
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className='icon'/>
                        
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon'/>
                        <div className="counter">1</div>
                        
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon'/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon'/>
                        
                    </div>

                    <div className="item">
                        <Link className='link' to="/user"><img 
                            src="https://th.bing.com/th/id/R.f038b95defb4b72e7c7f35c8764ff639?rik=LXDhoT%2fDCX4CWQ&pid=ImgRaw&r=0"
                            alt=""
                            className='avatar'
                        />
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;