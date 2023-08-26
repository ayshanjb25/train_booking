import React, { useState } from "react";
import { createStyles, Container, Paper, TextInput, Button, Notification } from "@mantine/core";

const useStyles = createStyles(() => ({
  blurredBackground: {
    filter: "blur(2px)",
  },
}));

function ViewTravel({ selectedTravel, onClose }) {
  const { classes } = useStyles();
  const [notification, setNotification] = useState(null);

  const handleCancel = () => {
   onClose();
  };
  const printTicket = () => {
    window.print(); // Trigger the browser's print dialog
  };

 
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Container size="xl">
        <Paper style={{ padding: "30px", width:'500px' }}>
          <div style={{ display: "flex", flexDirection:'column', marginBottom:'20px',justifyContent: "center", alignItems: "center", height: "10vh" }}>
          <h2 style={{ flex: 1, textAlign: "center", marginTop:'20px' }}>Travel History Details</h2>  
            

          </div>
          <form style={{display:"flex", flexDirection:'column',gap:'20px',marginTop:'-20px', padding:'30px', }}>
          
            <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between'}}><h4>Passenger ID : </h4><p>1</p></div>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between' }}><h4>Passenger Name : </h4><p>A B Perera</p></div>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between'}}><h4>Date : </h4><p>{selectedTravel.date}</p></div>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between'}}><h4>From Location : </h4><p>{selectedTravel.fromLocation}</p></div>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between'}}><h4>To Location : </h4><p>{selectedTravel.toLocation}</p></div>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between'}}><h4>Distance : </h4><p>{selectedTravel.distance}</p></div>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between'}}><h4>Train : </h4><p>{selectedTravel.train}</p></div>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between'}}><h4>Tickets bought : </h4><p>{selectedTravel.ticketCount}</p></div>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between'}}><h4>Amount Paid : </h4><p>{selectedTravel.amountPaid}</p></div>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'space-between'}}><h4>Points Earned : </h4><p>{selectedTravel.pointsEarned}</p></div>
            
            
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", gap: "10px"}} >
              <Button variant="filled" color="gray" style={{ flex: 0.5,fontSize: "14px", padding: "8px 16px" }} onClick={handleCancel}>
                Cancel
              </Button>
              <Button variant="filled" color="blue" style={{ flex: 0.5, fontSize: "14px", padding: "8px 16px" }} onClick={printTicket}>
                Print Ticket
              </Button>
            </div>
          </form>
          {notification && (
            <Notification
              title={notification.title}
              color={notification.color}
              onClose={() => setNotification(null)}
              autoClose
              autoCloseDelay={3000}
            >
              {notification.message}
            </Notification>
          )}
        </Paper>
        
      </Container>
    </div>
  );
}

export default ViewTravel;