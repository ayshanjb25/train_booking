import React, { useState } from "react";
import { createStyles, Container, Paper, TextInput, Notification, Select, Button } from "@mantine/core";
import { IconSquareX } from "@tabler/icons-react";




const useStyles = createStyles(() => ({
	blurredBackground: {
		filter: "blur(2px)", 
	},

    
}));



function BookTrainForm(props){

	const { classes } = useStyles();
	// const [notification, setNotification] = useState<Notifications | null>(null);
const handleCancel = () => {
    props.onClose();
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
						<form >
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
                            <h2 style={{ flex: 1, textAlign: "center" }}>Book Your Train</h2>
                        </div>
							<TextInput
								label="Passenger ID"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
							/>
                            <TextInput
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
							/>
                            <TextInput
								label="Ticket Class"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
							/>
                            <TextInput
								label="Number of seats required"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
							/>
                            <TextInput
								label="Depature Date"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
							/>
                             <TextInput
								label="Return Date"
								style={{ marginTop: "20px" }}
								labelProps={{ style: { marginBottom: "5px" } }}
							/>
							<div style={{ display: "flex", marginLeft: "50%", marginTop: "30px", gap: "10px" }}>
                            
                            <Button variant="filled" color="gray" style={{ flex: 0.5 }} onClick={handleCancel}>
									Cancel
								</Button>
								<Button type="submit" variant="filled" color="blue" style={{ flex: 0.5 }}>
									Book Now
								</Button>
							</div>
						</form>
					</Paper>
				</Container>
			</div>
			
		// </div>
	);
}

export default BookTrainForm;