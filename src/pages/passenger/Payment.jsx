import React, { useState } from 'react';
import PassengerSidebar from '../../components/sidebar/PassengerSidebar'
import Navbar from '../../components/navbar/Navbar'
import './booking.scss'
import { Button} from '@mantine/core';
import PaymentIcon from '@mui/icons-material/Payment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';

const title= "Booking Order"

function Payment() {
  const [showForm, setShowForm] = useState(false);

  const handlePayButtonClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <div className='form'>
      <div className="container">
        <div className="formContainer" style={{ border: "none" }}>
          <div className="formContent">
            <h2 className='title'>{title}</h2>
            <div className="buttons">
              <Button onClick={handlePayButtonClick} variant="filled" color="blue" icon={<PaymentIcon />}>
                Pay
              </Button>
              <Button variant="light" color="red" icon={<DeleteForeverIcon />}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
        {showForm && (
          <div className="overlay">
            <div className="popup">
              <h2 className="popupTitle">Payment</h2>
              <h3>Order 1</h3>
                <h4 style={{color:"green"}}>Status : Paid</h4>
                <p>Anuradhapura - Colombo</p>
                <p>2 Seats</p>
                <p>10/12/2023</p>
                <p>Colombo Express</p>
                <p>Rs. 2000</p>
              {/* Your payment form content goes here */}
              <Button onClick={handleFormClose} variant="light">
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
