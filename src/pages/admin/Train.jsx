// import React, { useEffect, useState } from "react";
// import AdminSidebar from "../../components/sidebar/AdminSidebar";
// import Navbar from "../../components/navbar/Navbar";
// import "../forms/user.scss";

// import {
//   useForm,
//   isNotEmpty,
//   isEmail,
//   isInRange,
//   hasLength,
//   matches,
// } from "@mantine/form";
// import { Button, Group, TextInput, NumberInput, Textarea } from "@mantine/core";
// import CustomTable from "../../components/table/Table";
// import UpdateTrainForm from "./forms/UpdateTrain";
// import DeleteForm from "./forms/delete";
// // import AdminSidebar from "../../components/sidebar/AdminSidebar";

// // const title = "Account Information - Administrator";

// function Train({trainData}) {


//   const [trains, setTrains] = useState([]);

//   useEffect(() => {
//     // Fetch station data from the backend when the component mounts

//     fetch('http://localhost:8800/api/trains',{
//       method:"GET",
//     })
//     .then(response => response.json())
//       .then((data)=>{
//         console.log(data, "trainData" )
//         setTrains(data);
//       })
//       // .catch(error => console.error(error));
//   }, []);



//   const form = useForm({
//     initialValues: {
//       username: "",
//       fname: "",
//       lname: "",
//       nic: "",
//       email: "",
//       mobile: "",
//       age: 18,
//     },

//     validate: {
//       name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
//       job: isNotEmpty("Enter your current job"),
//       email: isEmail("Invalid email"),
//       favoriteColor: matches(
//         /^#([0-9a-f]{3}){1,2}$/,
//         "Enter a valid hex color"
//       ),
//       age: isInRange(
//         { min: 18, max: 99 },
//         "You must be 18-99 years old to register"
//       ),
//     },
//   });

//   const [showPasswordReset, setShowPasswordReset] = useState(false); // State to manage visibility

//   const [showOriginalForm, setShowOriginalForm] = useState(true);

//   const handlePasswordResetClick = () => {
//     setShowPasswordReset(true);
//     setShowOriginalForm(false);
//   };

//   const handlePasswordResetCancel = () => {
//     setShowPasswordReset(false);
//     setShowOriginalForm(true);
//   };

//   const [showUpdateForm, setShowUpdateForm] = useState(false);
//   const [showDeleteForm, setShowDeleteForm] = useState(false);


//   // const headers = ['Station Reference','Station', 'Location', 'Description'];
//   //   const data = [
//   //     { 'Train Reference': '1', Station: 'Colombo Express', Location: 'Colombo', Description:'Anuradhapura'},
//   //     { 'Train Reference': '1', Station: 'Colombo Express', Location: 'Colombo', Description:'Anuradhapura' },
//   //     { 'Train Reference': '1', Station: 'Colombo Express', Location: 'Colombo', Description:'Anuradhapura' },
//   //     { 'Train Reference': '1', Station: 'Colombo Express', Location: 'Colombo', Description:'Anuradhapura' },
//   //     // Add more data objects as needed
//   //   ];
//   //   const btns = [
//   //       <Button variant="filled" color="gray">Track Train</Button>,
//   //     ];


//       const headers2 = ['Train Reference','Train', 'Capacity', 'Route'];
//     // const data2 = [
//     //   { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura'},
//     //   { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura' },
//     //   { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura' },
//     //   { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura' },
//     //   // Add more data objects as needed
//     // ];
//     // const btns2 = [
//     //     <Button variant="filled" color="gray">Track Train</Button>,
//     //   ];
//       const tableData = trains.map((train) => ({
//         'Train Reference':train._id,
//         Train: train.name,
//         Route:train.route,
//         Capacity: train.capacity
//       }));  
  
//       // const btns = trains.map((train, index) => [
//       //     <Button key={`${train._id}-update`} variant="filled" color="blue">Edit Train</Button>,
//       //     <Button key={`${train._id}-delete`} variant="filled" color="red">Delete Train</Button>,
//       //   ]);


//       const btns =  [
//         <Button key={1} variant="filled" color="blue" onClick={() => setShowUpdateForm(true)}>Edit Train</Button>,
//         <Button key={1} variant="filled" color="red" onClick={() => setShowDeleteForm(true)}>Delete Train</Button>,
//       ];

//       const handleCancelUpdate = () => {
//         setShowUpdateForm(false);
//       };
//       const handleCancelDelete = () => {
//         setShowDeleteForm(false);
//       };


//   return (
//     <div className="form">
//       <AdminSidebar />
//       <div className="container">
//         <Navbar />
//         <div className="formContainer">
//           <div style={{ width:"50%",display: "flex", flexDirection: "row", gap: "50px" }}>
          

//             <div style={{ flex: 2 }}>
//               <h2 className="title">Add Train</h2>
//               <form
//                 component="form"
//                 maw={400}
//                 mx="auto"
//                 onSubmit={form.onSubmit(() => {})}
//               >
//                 <TextInput
//                   label="Train Name"
//                   placeholder="Enter Station Name"
//                   withAsterisk
//                   mt="md"
//                   {...form.getInputProps("username")}
                  
//                 />

//                 <TextInput
//                   label="Capacity"
//                   placeholder="Enter Capacity"
//                   withAsterisk
//                   mt="md"
//                   {...form.getInputProps("username")}
                  
//                 />
//                 <Textarea
//                   label="Route"
//                   placeholder="Enter Route"
//                   withAsterisk
//                   mt="md"
//                   {...form.getInputProps("username")}
                  
//                 />
//                 <div style={{marginTop:"20px", }}>
//                 <Button variant="filled" color="blue">Add Train</Button></div>
                
//               </form>
//             </div>

            
//           </div>
          
//         </div>


//         <div className='formContainer' style={{border:"none",padding:"20px 10px 0px 10px",display:"flex", flexDirection: "row"}}>

//             <div style={{flex:2}}>
//             <h2 className='title'>Trains</h2>
//             <CustomTable headers={headers2}
//                         data={tableData}
//                         buttonComponents={btns}
//                         />
//             {showUpdateForm && (
//                     <div className="update-form-overlay">
//                       <UpdateTrainForm onClose={handleCancelUpdate} />
//                     </div>
//                   )}
//                   {showDeleteForm && (
//                     <div className="update-form-overlay">
//                       <DeleteForm onClose={handleCancelDelete} />
//                     </div>
//                   )}

//             </div>
            
            
            
            
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Train;
import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { Button, TextInput, Textarea } from "@mantine/core";
import CustomTable from "../../components/table/Table";
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import UpdateStationForm from "./forms/UpdateStation";
import { InputWithButton } from "../../components/SearchInput";
import DeleteStation from "./forms/DeleteStation";
import UpdateTrainForm from "./forms/UpdateTrain";
import DeleteTrainForm from "./forms/DeleteTrain";

const title = "Trains";
function Train() {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);



  // to fetch stations details to table
  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/trains");
      setTrains(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trains:", error);
      setLoading(false);
    }
  };
  



  //add station 

  const handleAddTrain = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.trainName.value,
      route: event.target.elements.route.value,
      capacity: event.target.elements.capacity.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:8800/api/trains",
        formData
      );
      console.log("Train added successfully:", response.data);
      fetchTrains(); // Fetch stations again to update the list
    } catch (error) {
      console.error("Error adding train:", error);
    }
  };



  //select station to modify
  const [selectedTrain, setSelectedTrain] = useState(null);

  
//update station 
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  
  const handleEditTrainClick = (train) => {
    setShowUpdateForm(true);
    setShowDeleteForm(false); // Close the delete form if it's open
    setSelectedTrain(train); // Store the selected station data
  };

  const handleTrainUpdate = (updatedTrain) => {
    // Find the index of the updated station in the array
    const updatedIndex = trains.findIndex(
      (train) => train._id === updatedTrain._id
    );

    // Update the station at the specified index
    if (updatedIndex !== -1) {
      const updatedTrains = [...trains];
      updatedTrains[updatedIndex] = updatedTrain;
      setTrains(updatedTrains);
    }
  };

 

//delete station

const [showDeleteForm, setShowDeleteForm] = useState(false);
  const handleDeleteTrainClick = (train) => {
    setShowUpdateForm(false);
    setShowDeleteForm(true); // Close the delete form if it's open
    setSelectedTrain(train); // Store the selected station data
  };


  //table stuff

  const headers = ["Train Reference", "Train", "Route", "Capacity"];

  const tableData = trains.map((train) => ({
            'Train Reference':train._id,
            Train: train.name,
            Route:train.route,
            Capacity: train.capacity,
    EditButton: (
      <Button
        key={`${train._id}-update`}
        variant="filled"
        color="blue"
        onClick={() => handleEditTrainClick(train)}
      >
        Edit Train
      </Button>
    ),
    DeleteButton: (
      <Button
        key={`${train._id}-delete`}
        variant="filled"
        color="red"
        onClick={() => handleDeleteTrainClick(train)}
      >
        Delete Train
      </Button>
    ),
  }));



  const generatePrintableContent = () => {
    // Create a string containing the HTML for the table
    const printableHTML = `
    <div style="align-items: center; justify-content: center; text-align: center; margin-top:50px; ">
  <h3 style="color:rgb(43, 43, 161);">BookMyTrain</h3>
  <h4>Train Details</h4>
</div>

    <div style="padding:20px 50px;">
      <table style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr style="border-bottom: 2px solid #000;">
            <th style="border: 1px solid #000; padding: 8px;">Train Reference</th>
            <th style="border: 1px solid #000; padding: 8px;">Train</th>
            <th style="border: 1px solid #000; padding: 8px;">Route</th>
            <th style="border: 1px solid #000; padding: 8px;">Description</th>
          </tr>
        </thead>
        <tbody>
          ${tableData
            .map(
              (row) => `
                <tr>
                  <td style="border: 1px solid #000; padding: 8px;">${
                    row['Train Reference']
                  }</td>
                  <td style="border: 1px solid #000; padding: 8px;">${row['Train']}</td>
                  <td style="border: 1px solid #000; padding: 8px;">${row['Route']}</td>
                  <td style="border: 1px solid #000; padding: 8px;">${
                    row['Description']
                  }</td>
                </tr>
              `
            )
            .join('')}
        </tbody>
      </table>
    `;
  
    // Open a new window and write the printable content
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Printable Trains Table</title>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
          </style>
        </head>
        <body>
          ${printableHTML}
        </body>
      </html>
    `);
  
    // Close the document after printing
    printWindow.document.close();

    // Print automatically
  printWindow.print();
  };
 
  

  return (
    <div>
      <div className="form">
        <AdminSidebar />
        <div className="container">
          <Navbar />
          <div className="formContainer">
            <div>
              <h2 className="title">Add Train</h2>
              <form onSubmit={handleAddTrain}>
                <TextInput
                  label="Train Name"
                  placeholder="Enter Train Name"
                  withAsterisk
                  name="trainName"
                />
                <TextInput
                  label="Route"
                  placeholder="Enter Route"
                  withAsterisk
                  name="route"
                />
                <TextInput
                  label="Capacity"
                  placeholder="Enter Capacity"
                  withAsterisk
                  name="capacity"
                />
                <div style={{ marginTop: "20px" }}>
                  <Button type="submit" variant="filled" color="blue">
                    Add Train
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="formContainer">
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <h2 className="title" style={{ flex: 3 }}>
                  {title}
                </h2>


                
                <div style={{ flex: 1 , display:'flex',gap :'20px',alignItems: 'center', justifyContent: 'center'}}>
                   <InputWithButton
                      placeholder="Search Trains"
                      // value={searchQuery}
                      // onChange={(event) => setSearchQuery(event.target.value)}
                      // // Add a click handler to clear search
                      // onButtonClick={() => setSearchQuery('')}
                    />
                    <div style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Button variant="filled" color="blue" style={{ flex: 0.5, fontSize: "14px"}}  onClick={generatePrintableContent}>
                Print All Trains
              </Button></div>
                </div>
              </div>
              {loading ? (
                <div>Loading trains...</div>
              ) : (
                <CustomTable
                  headers={headers}
                  data={tableData}
                  getRowId={(row) => row._id}
                  // buttonComponents={btns}
                />
              )}





              {showUpdateForm && (
                <div className="update-form-overlay">
                  <UpdateTrainForm
                    train={selectedTrain} // Pass the selected station data as props
                    onUpdate={handleTrainUpdate}
                    onClose={() => setShowUpdateForm(false)}
                  />
                </div>
              )}
              {/* Overlay for Delete Form */}
              {showDeleteForm && (
                <div className="update-form-overlay">
                  <DeleteTrainForm
                    onClose={() => setShowDeleteForm(false)}
                    selectedTrain={selectedTrain}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Train;
