import React, { useState, useEffect } from "react";
import { createStyles, Container, Paper, TextInput, Notification, Select, Button } from "@mantine/core";
import { IconSquareX } from "@tabler/icons-react";



const useStyles = createStyles(() => ({
	blurredBackground: {
		filter: "blur(2px)", 
	},
}));



function UpdateStationForm(props){

	const { classes } = useStyles();
	// const [notification, setNotification] = useState<Notifications | null>(null);
const handleCancel = () => {
    props.onClose();
  };
  const [stations, setStations] = useState([]);
  useEffect(() => {
    // Fetch station data from the backend when the component mounts

    fetch('http://localhost:8800/api/stations',{
      method:"PUT",
    })
    .then(response => response.json())
      .then((data)=>{
        console.log(data, "stationData" )
        setStations(data);
      })
      // .catch(error => console.error(error));
  }, []);

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
						<form >
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
                            <h2 style={{ flex: 1, textAlign: "center" }}>Update Station</h2>
                        </div>
							
							<TextInput
								label="Station Name"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
							/>
							<TextInput
								label="Location"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
							/>
                            <TextInput
								label="Description"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
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