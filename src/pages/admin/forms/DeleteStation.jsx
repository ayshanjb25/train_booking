import React, { useState } from "react";
import { createStyles, Container, Paper, TextInput, Button, Notification } from "@mantine/core";
import { IconSquareX } from "@tabler/icons-react";
import axios from "axios";

const useStyles = createStyles(() => ({
  blurredBackground: {
    filter: "blur(2px)",
  },
}));

function DeleteStation({ title, selectedStation, onDelete, onClose }) {
  const { classes } = useStyles();
  const [notification, setNotification] = useState(null);

  const handleCancel = () => {
   onClose();
  };


  const handleDelete = async () => {
    if (selectedStation) {
      try {
        // Delete the selected station here using axios.delete or your API call
        await axios.delete(`http://localhost:8800/api/stations/${selectedStation._id}`);

        // Once the deletion is successful, call onDelete and show a notification
        onDelete(selectedStation._id); // Call the function passed as prop to update the stations list
        setNotification({
          title: 'Station Deleted',
          message: 'The station has been successfully deleted.',
          color: 'success',
        });

        // Close the form after a few seconds
        setTimeout(() => {
          onClose();
        }, 3000);
      } catch (error) {
        console.error('Error deleting station:', error);
      }
    }
  };
 

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Container size="sm">
        <Paper style={{ padding: "30px", width: "400px",  }}>
          <div style={{ display: "flex", flexDirection:'column', marginBottom:'20px',justifyContent: "center", alignItems: "center", height: "10vh" }}>
            <h2 style={{ flex: 1, textAlign: "center" }}>Delete Station</h2>
            <h4>Station : </h4><p>{selectedStation.name}</p>
          </div>
          <form>
            
            <p>Are you sure you want to delete this record?</p>
            
            
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", gap: "10px"}} >
              <Button variant="filled" color="gray" style={{ flex: 0.5,fontSize: "14px", padding: "8px 16px" }} onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleDelete} variant="filled" color="blue" style={{ flex: 0.5,fontSize: "14px", padding: "8px 16px" } }>
                Yes
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

export default DeleteStation;
