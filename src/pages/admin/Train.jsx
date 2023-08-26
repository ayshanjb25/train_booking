import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import Navbar from "../../components/navbar/Navbar";
import "../forms/user.scss";

import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import { Button, Group, TextInput, NumberInput, Textarea } from "@mantine/core";
import CustomTable from "../../components/table/Table";
import UpdateTrainForm from "./forms/UpdateTrain";
import DeleteForm from "./forms/delete";
// import AdminSidebar from "../../components/sidebar/AdminSidebar";

// const title = "Account Information - Administrator";

function Train({trainData}) {


  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch station data from the backend when the component mounts

    fetch('http://localhost:8800/api/trains',{
      method:"GET",
    })
    .then(response => response.json())
      .then((data)=>{
        console.log(data, "trainData" )
        setTrains(data);
      })
      // .catch(error => console.error(error));
  }, []);



  const form = useForm({
    initialValues: {
      username: "",
      fname: "",
      lname: "",
      nic: "",
      email: "",
      mobile: "",
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
      job: isNotEmpty("Enter your current job"),
      email: isEmail("Invalid email"),
      favoriteColor: matches(
        /^#([0-9a-f]{3}){1,2}$/,
        "Enter a valid hex color"
      ),
      age: isInRange(
        { min: 18, max: 99 },
        "You must be 18-99 years old to register"
      ),
    },
  });

  const [showPasswordReset, setShowPasswordReset] = useState(false); // State to manage visibility

  const [showOriginalForm, setShowOriginalForm] = useState(true);

  const handlePasswordResetClick = () => {
    setShowPasswordReset(true);
    setShowOriginalForm(false);
  };

  const handlePasswordResetCancel = () => {
    setShowPasswordReset(false);
    setShowOriginalForm(true);
  };

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);


  // const headers = ['Station Reference','Station', 'Location', 'Description'];
  //   const data = [
  //     { 'Train Reference': '1', Station: 'Colombo Express', Location: 'Colombo', Description:'Anuradhapura'},
  //     { 'Train Reference': '1', Station: 'Colombo Express', Location: 'Colombo', Description:'Anuradhapura' },
  //     { 'Train Reference': '1', Station: 'Colombo Express', Location: 'Colombo', Description:'Anuradhapura' },
  //     { 'Train Reference': '1', Station: 'Colombo Express', Location: 'Colombo', Description:'Anuradhapura' },
  //     // Add more data objects as needed
  //   ];
  //   const btns = [
  //       <Button variant="filled" color="gray">Track Train</Button>,
  //     ];


      const headers2 = ['Train Reference','Train', 'Capacity', 'Route'];
    // const data2 = [
    //   { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura'},
    //   { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura' },
    //   { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura' },
    //   { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura' },
    //   // Add more data objects as needed
    // ];
    // const btns2 = [
    //     <Button variant="filled" color="gray">Track Train</Button>,
    //   ];
      const tableData = trains.map((train) => ({
        'Train Reference':train._id,
        Train: train.name,
        Route:train.route,
        Capacity: train.capacity
      }));  
  
      // const btns = trains.map((train, index) => [
      //     <Button key={`${train._id}-update`} variant="filled" color="blue">Edit Train</Button>,
      //     <Button key={`${train._id}-delete`} variant="filled" color="red">Delete Train</Button>,
      //   ]);


      const btns =  [
        <Button key={1} variant="filled" color="blue" onClick={() => setShowUpdateForm(true)}>Edit Train</Button>,
        <Button key={1} variant="filled" color="red" onClick={() => setShowDeleteForm(true)}>Delete Train</Button>,
      ];

      const handleCancelUpdate = () => {
        setShowUpdateForm(false);
      };
      const handleCancelDelete = () => {
        setShowDeleteForm(false);
      };


  return (
    <div className="form">
      <AdminSidebar />
      <div className="container">
        <Navbar />
        <div className="formContainer">
          <div style={{ width:"50%",display: "flex", flexDirection: "row", gap: "50px" }}>
          

            <div style={{ flex: 2 }}>
              <h2 className="title">Add Train</h2>
              <form
                component="form"
                maw={400}
                mx="auto"
                onSubmit={form.onSubmit(() => {})}
              >
                <TextInput
                  label="Train Name"
                  placeholder="Enter Station Name"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("username")}
                  
                />

                <TextInput
                  label="Capacity"
                  placeholder="Enter Capacity"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("username")}
                  
                />
                <Textarea
                  label="Route"
                  placeholder="Enter Route"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("username")}
                  
                />
                <div style={{marginTop:"20px", }}>
                <Button variant="filled" color="blue">Add Train</Button></div>
                
              </form>
            </div>

            
          </div>
          
        </div>


        <div className='formContainer' style={{border:"none",padding:"20px 10px 0px 10px",display:"flex", flexDirection: "row"}}>

            <div style={{flex:2}}>
            <h2 className='title'>Trains</h2>
            <CustomTable headers={headers2}
                        data={tableData}
                        buttonComponents={btns}
                        />
            {showUpdateForm && (
                    <div className="update-form-overlay">
                      <UpdateTrainForm onClose={handleCancelUpdate} />
                    </div>
                  )}
                  {showDeleteForm && (
                    <div className="update-form-overlay">
                      <DeleteForm onClose={handleCancelDelete} />
                    </div>
                  )}

            </div>
            
            
            
            
        </div>
      </div>
    </div>
  );
}

export default Train;
