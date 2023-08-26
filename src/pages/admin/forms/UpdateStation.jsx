import React, { useState, useEffect } from "react";
import { createStyles, Container, Paper, TextInput, Notification, Select, Button } from "@mantine/core";


const useStyles = createStyles(() => ({
	blurredBackground: {
		filter: "blur(2px)", 
	},
}));



function UpdateStationForm({ station, onClose }){

	const { classes } = useStyles();
	// const [notification, setNotification] = useState<Notifications | null>(null);

  const [stations, setStations] = useState([]);

  useEffect(() => {
    setStations(station); // Set the initial values
  }, [station]);

  const handleCancel = () => {
    onClose();
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedStation = {
	  _id: stations._id,
      name: event.target.elements.stationName.value,
      location: event.target.elements.location.value,
      description: event.target.elements.description.value
    };

    try {
      const response = await fetch(`http://localhost:8800/api/stations/${station._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedStation)
      });

      if (response.ok) {
        console.log("Station updated successfully");
        onClose(); // Close the form
      } else {
        console.error("Failed to update station");
      }
    } catch (error) {
      console.error("Error updating station:", error);
    }
  };

	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
			{/* <div className={showDeleteProduct ? classes.blurredBackground : ""}> */}
				<Container size="sm">
					<Paper style={{ padding: "30px", width: "400px" }}>
						{/* {notification != null && (
							<Notification title={notification.title} color={notification.color} onClose={() => setNotification(null)}>
								{notification.message}
							</Notification>
						)} */}
						<form onSubmit={handleSubmit}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
                            <h2 style={{ flex: 1, textAlign: "center" }}>Update Station</h2>
                        </div>

						<h4>Station Reference : </h4><p>{stations._id}</p>
							
							<TextInput
								label="Station Name"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
								defaultValue={stations.name}
								name="stationName"
							/>
							<TextInput
								label="Location"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
								defaultValue={stations.location} 
								name="location"
							/>
                            <TextInput
								label="Description"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
								defaultValue={stations.description} 
								name="description"
							/>
							<div style={{ display: "flex", marginLeft: "50%", marginTop: "30px", gap: "10px" }}>
                            
                            <Button variant="filled" color="gray" style={{ flex: 0.5 }} onClick={handleCancel}>
									Cancel
								</Button>
								<Button type="submit" variant="filled" color="blue" style={{ flex: 0.5 }}>
									Save
								</Button>
							</div>
						</form>
					</Paper>
				</Container>
			</div>
			
		// </div>
	);
}

export default UpdateStationForm;