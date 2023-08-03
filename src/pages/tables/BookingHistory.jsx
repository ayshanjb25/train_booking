import React, { useState } from 'react';
import PassengerSidebar from '../../components/sidebar/PassengerSidebar'
import Navbar from '../../components/navbar/Navbar'
// import './user.scss'
import { Button} from '@mantine/core';
import AddIcon from '@mui/icons-material/Add';


import CustomTable from '../../components/table/Table';

const title= "Booking History"

function BookingHistory() {
    const headers = ['Booking Reference','Amount', 'No. of Seats', 'From Station', 'To Station', 'Booking Date'];
    const data = [
      { 'Booking Reference': '1', Amount: '$200', 'No. of Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura', 'Booking Date':'10-12-2023' },
      { 'Booking Reference': '1', Amount: '$200', 'No. of Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura', 'Booking Date':'10-12-2023' },
      { 'Booking Reference': '1', Amount: '$200', 'No. of Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura', 'Booking Date':'10-12-2023' },
      { 'Booking Reference': '1', Amount: '$200', 'No. of Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura', 'Booking Date':'10-12-2023' },
      // Add more data objects as needed
    ];
    const btns = [
        <Button variant="filled" color="red">Delete</Button>,
      ];

  return (
    <div className='form'>
      <PassengerSidebar/>
        <div className="container">
          <Navbar/>
            <div className="formContainer" >
                <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <h2 className='title' style={{flex:5, marginBottom:"30px",justifyContent:"flex-start"}}>{title}</h2>
                    <Button style={{flex:1, justifyContent:"flex-end"}}><AddIcon/>Book Seats</Button>
                    
                </div>
                <CustomTable headers={headers}
                        data={data}
                        buttonComponents={btns}
                        /></div>
                
            </div>
        </div>
    </div>
    );
}

export default BookingHistory;