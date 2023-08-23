import React, { useState, useEffect } from "react";
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import Navbar from "../../components/navbar/Navbar";
import "../forms/user.scss";
import axios from 'axios'; 

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
import { InputWithButton } from "../../components/SearchInput";
import UpdateStationForm from "./forms/UpdateStation";
import DeleteForm from "./forms/delete";

// const title = "Account Information - Administrator";

function Station({stationData}) {


  const [stations, setStations] = useState([]);

  useEffect(() => {
    // Fetch station data from the backend when the component mounts

    fetch('http://localhost:8800/api/stations',{
      method:"GET",
    })
    .then(response => response.json())
      .then((data)=>{
        console.log(data, "stationData" )
        setStations(data);
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

  const handleEditTrainClick = () => {
    setShowUpdateForm(true);
    setShowDeleteForm(false); // Close the delete form if it's open
  };
  
  // const handleDeleteTrainClick = () => {
  //   setShowUpdateForm(false); // Close the update form if it's open
  //   setShowDeleteForm(true);
  // };
  

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);



  const headers = ['Station Reference','Station', 'Location', 'Description'];
    // const data = [
    //   { 'Station Reference': '1', Station: 'Colombo Express', Location: 'Colombo', Description:'Anuradhapura'},
    //   { 'Station Reference': '1', Station: 'Colombo Express', Location: 'Colombo', Description:'Anuradhapura' },
    //   { 'Station Reference': '1', Station: 'Colombo Express', Location: 'Colombo', Description:'Anuradhapura' },
    //   { 'Station Reference': '1', Station: 'Colombo Express', Location: 'Colombo', Description:'Anuradhapura' },
    //   // Add more data objects as needed
    // ];


    const tableData = stations.map((station) => ({
      'Station Reference':station._id,
      Station: station.name,
      Location:station.location,
      Description: station.description
    }));  

    // const btns = stations.map((station, index) => [
    //     <Button key={`${station._id}-update`} variant="filled" color="blue">Edit Station</Button>,
    //     <Button key={`${station._id}-delete`} variant="filled" color="red">Delete Station</Button>,
    //   ]);

    const btns =  [
      <Button key={1} variant="filled" color="blue"onClick={() => setShowUpdateForm(true)}>Edit Train</Button>,
      <Button key={1} variant="filled" color="red"onClick={() => setShowDeleteForm(true)}>Delete Train</Button>,
    ];

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Perform the POST request to the API endpoint
      try {
        const response = await axios.post('http://localhost:8800/api/stations', {
          name: form.values.stationname,
          location: form.values.location,
          description: form.values.description,
        });
  
        if (response.status === 201) {
          console.log('Station added successfully');
          // Clear the form fields after successful submission
          form.setValues({
            stationname: '',
            location: '',
            description: '',
          });
        } else {
          console.error('Failed to add station');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

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
        <div style={{width:"70%"}} className="formContainer">
          <div >
              <h2 className="title">Add Station</h2>
              <form
                component="form"
                maw={400}
                mx="auto"
                onSubmit={form.onSubmit(() => {})}
              >
                <TextInput
                  label="Station Name"
                  placeholder="Enter Station Name"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("stationname")}
                  
                />

                <TextInput
                  label="Location"
                  placeholder="Enter Location"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("location")}
                  
                />
                <Textarea
                  label="Description"
                  placeholder="Enter Description"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("description")}
                  
                />
                <div style={{marginTop:"20px", }}>
                <Button variant="filled" color="blue">Add Station</Button></div>

                
              </form>
            </div>

          
         
        </div>


        <div className='formContainer' style={{border:"none",padding:"20px 10px 0px 10px",display:"flex", flexDirection: "row"}}>
            <div style={{flex:1}}>
            <h2 className='title'>Stations</h2>
            <div><InputWithButton placeholder="Stations" style={{ flex: 1 }} /></div>
            
            <CustomTable
               // Make sure to provide a unique key
              headers={headers}
              data={tableData} // Pass the current station as an array to the CustomTable
              buttonComponents={btns}
              getRowId={row => row._id}
            />
            {/* Overlay for Update Form */}
            {showUpdateForm && (
            <div className="update-form-overlay">
           <UpdateStationForm onClose={() => setShowUpdateForm(false)} />
          </div>
            )}
           {/* Overlay for Delete Form */}
           {showDeleteForm && (
          <div className="update-form-overlay">
          <DeleteForm onClose={() => setShowDeleteForm(false)} />
          </div>
          )}
          

            </div>

            
            
            
            
            
        </div>
      </div>
    </div>
  );
}

export default Station;

