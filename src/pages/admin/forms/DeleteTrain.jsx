import React, { useState } from "react";
import { createStyles, Container, Paper, TextInput, Button, Notification } from "@mantine/core";
import { IconSquareX } from "@tabler/icons-react";
import axios from "axios";

const useStyles = createStyles(() => ({
  blurredBackground: {
    filter: "blur(2px)",
  },
}));

function DeleteTrain({ title, selectedTrain, onDelete, onClose }) {
  const { classes } = useStyles();
  const [notification, setNotification] = useState(null);

  const handleCancel = () => {
   onClose();
  };


  const handleDelete = async () => {
    if (selectedTrain) {
      try {
        // Delete the selected station here using axios.delete or your API call
        await axios.delete(`http://localhost:8800/api/trains/${selectedTrain._id}`);

        // Once the deletion is successful, call onDelete and show a notification
        onDelete(selectedTrain._id); // Call the function passed as prop to update the stations list
        setNotification({
          title: 'Train Deleted',
          message: 'The train record has been successfully deleted.',
          color: 'success',
        });

        // Close the form after a few seconds
        setTimeout(() => {
          onClose();
        }, 3000);
      } catch (error) {
        console.error('Error deleting train:', error);
      }
    }
  };
 

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Container size="sm">
        <Paper style={{ padding: "30px", width: "400px",  }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
            <h2 style={{ flex: 1, textAlign: "center" }}>Delete Train</h2>
          </div>
          <form>
            
            <p>Are you sure you want to delete this record?</p>
            {/* <TextInput
              label="Name"
              style={{ marginTop: "20px" }}
              labelProps={{ style: { marginBottom: "5px" } }}
            />
            <TextInput
              label="NIC"
              style={{ marginTop: "20px" }}
              labelProps={{ style: { marginBottom: "5px" } }}
            />
            <TextInput
              label="Email"
              style={{ marginTop: "20px" }}
              labelProps={{ style: { marginBottom: "5px" } }}
            />
            <TextInput
              label="Mobile"
              style={{ marginTop: "20px" }}
              labelProps={{ style: { marginBottom: "5px" } }}
            /> */}
            
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

export default DeleteTrain;
