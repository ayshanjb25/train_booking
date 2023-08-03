import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize='small'/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={5}/>
                </div>
                <p className="title">Total Sale made today</p>
                <p className="amount">$420</p>
                <div className="desc">
                    Previous transactions processing. Last payments may not be included.
                </div>
            </div>
        </div>
    )
}

export default Featured;