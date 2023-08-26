// import React, { useState } from "react";
// import { createStyles, Container, Paper, TextInput, Notification, Select, Button } from "@mantine/core";
// import { IconSquareX } from "@tabler/icons-react";



// const useStyles = createStyles(() => ({
// 	blurredBackground: {
// 		filter: "blur(2px)", 
// 	},
// }));



// function UpdateTrainForm(props){

// 	const { classes } = useStyles();
// 	// const [notification, setNotification] = useState<Notifications | null>(null);
// const handleCancel = () => {
//     props.onClose();
//   };
    

// 	return (
// 		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
// 			{/* <div className={showDeleteProduct ? classes.blurredBackground : ""}> */}
// 				<Container size="sm">
// 					<Paper style={{ padding: "30px", width: "400px" }}>
// 						{/* {notification != null && (
// 							<Notification title={notification.title} color={notification.color} onClose={() => setNotification(null)}>
// 								{notification.message}
// 							</Notification>
// 						)} */}
// 						<form >
//                         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
//                             <h2 style={{ flex: 1, textAlign: "center" }}>Update Train</h2>
//                         </div>
// 							<TextInput
// 								label="Train Reference"
// 								style={{ marginTop: "20px" }}
// 								labelProps={{ style: { marginBottom: "5px" } }}
// 							/>
// 							<TextInput
// 								label="Train"
// 								style={{ marginTop: "20px" }}
// 								labelProps={{ style: { marginBottom: "5px" } }}
// 							/>
// 							<TextInput
// 								label="Capacity"
// 								style={{ marginTop: "20px" }}
// 								labelProps={{ style: { marginBottom: "5px" } }}
// 							/>
//                             <TextInput
// 								label="Route"
// 								style={{ marginTop: "20px" }}
// 								labelProps={{ style: { marginBottom: "5px" } }}
// 							/>
// 							<div style={{ display: "flex", marginLeft: "50%", marginTop: "30px", gap: "10px" }}>
                            
//                             <Button variant="filled" color="gray" style={{ flex: 0.5 }} onClick={handleCancel}>
// 									Cancel
// 								</Button>
// 								<Button type="submit" variant="filled" color="blue" style={{ flex: 0.5 }}>
// 									Save
// 								</Button>
// 							</div>
// 						</form>
// 					</Paper>
// 				</Container>
// 			</div>
			
// 		// </div>
// 	);
// }

// export default UpdateTrainForm;

import React, { useState, useEffect } from "react";
import { createStyles, Container, Paper, TextInput, Notification, Select, Button } from "@mantine/core";


const useStyles = createStyles(() => ({
	blurredBackground: {
		filter: "blur(2px)", 
	},
}));



function UpdateTrainForm({ train, onClose }){

	const { classes } = useStyles();
	// const [notification, setNotification] = useState<Notifications | null>(null);

    const [trains, setTrains] = useState([]);

    useEffect(() => {
        setTrains(train); // Set the initial values
    }, [train]);
  
    const handleCancel = () => {
      onClose();
    };
  
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const updatedTrain = {
        _id: trains._id,
        name: event.target.elements.trainName.value,
        route: event.target.elements.route.value,
        capacity: event.target.elements.capacity.value
      };
  
      try {
        const response = await fetch(`http://localhost:8800/api/trains/${train._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedTrain)
        });
  
        if (response.ok) {
          console.log("Train updated successfully");
          onClose(); // Close the form
        } else {
          console.error("Failed to update train");
        }
      } catch (error) {
        console.error("Error updating train:", error);
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
                            <h2 style={{ flex: 1, textAlign: "center" }}>Update Train</h2>
                        </div>

						<h4>Train Reference : </h4><p>{trains._id}</p>
							
							<TextInput
								label="Train Name"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
								defaultValue={trains.name}
								name="trainName"
							/>
							<TextInput
								label="Route"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
								defaultValue={trains.route} 
								name="route"
							/>
                            <TextInput
								label="Capacity"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
								defaultValue={trains.capacity} 
								name="capacity"
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

export default UpdateTrainForm;