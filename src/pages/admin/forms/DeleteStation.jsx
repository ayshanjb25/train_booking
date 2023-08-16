import React from "react";
import { createStyles, Container, Paper, TextInput, Button } from "@mantine/core";
import { IconSquareX } from "@tabler/icons-react";

const useStyles = createStyles(() => ({
  blurredBackground: {
    filter: "blur(2px)",
  },
}));

function DeleteStation(props) {
  const { classes } = useStyles();

  const handleCancel = () => {
    props.onClose();
  };
 

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Container size="sm">
        <Paper style={{ padding: "30px", width: "400px",  }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
            <h2 style={{ flex: 1, textAlign: "center" }}>Delete Station</h2>
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
            
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px", gap: "10px"}}>
              <Button variant="filled" color="gray" style={{ flex: 0.5,fontSize: "14px", padding: "8px 16px" }} onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" variant="filled" color="blue" style={{ flex: 0.5,fontSize: "14px", padding: "8px 16px" } }>
                Yes
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default DeleteStation;
