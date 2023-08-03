import React, { useState } from 'react';
import PassengerSidebar from '../../components/sidebar/PassengerSidebar'
import Navbar from '../../components/navbar/Navbar'
import './booking.scss'
import { Button} from '@mantine/core';
import PaymentIcon from '@mui/icons-material/Payment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';




const title= "Booking Order"

function BookingOrder() {

    const [showForm, setShowForm] = useState(false);

  const handlePayButtonClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };
   

  return (
    <div className='form'>
      <PassengerSidebar/>
        <div className="container">
          <Navbar/>
            <div className="formContainer" style={{border:"none"}} >
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
                <h2 className='title' style={{ flex: 5, marginBottom: "30px" }}>{title}</h2>
                <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "20px", marginRight:"60%"}}>
                    <Button style={{ flex: 1 }}><AddIcon />Book Seats</Button>
                    <Button style={{ flex: 1 }}><AddIcon />View Booking History</Button>
                    </div>
                </div>
            </div>
            <div className='bookCard'>
                <div style={{ flex: 1 }}>
                <h3>Order 1</h3>
                <h4 style={{color:"green"}}>Status : Paid</h4>
                <p>Anuradhapura - Colombo</p>
                <p>2 Seats</p>
                <p>10/12/2023</p>
                <p>Colombo Express</p>
                <p>Rs. 2000</p>
                </div>

                <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginRight:"60%"}}>
                    <Button style={{ flex: 1 }} onClick={handlePayButtonClick}><PaymentIcon />Pay</Button>
                    <Button style={{ flex: 1 }} color="red" ><DeleteForeverIcon />Remove Booking</Button>
                    </div>


                </div>

            </div>
            <div className='bookCard'>
                <div style={{ flex: 1 }}>
                <h3>Order 2</h3>
                <h4 style={{color:"red"}}>Status : Pending</h4>
                <p>Anuradhapura - Colombo</p>
                <p>2 Seats</p>
                <p>10/12/2023</p>
                <p>Colombo Express</p>
                <p>Rs. 2000</p>
                </div>

                <div style={{ flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginRight:"60%"}}>
                    <Button style={{ flex: 1 }}><PaymentIcon />Pay</Button>
                    <Button style={{ flex: 1 }} color="red"><DeleteForeverIcon />Remove Booking</Button>
                    </div>


                </div>

            </div>

                
            </div>
        </div>
    </div>
    );
}

export default BookingOrder;