import React, { useState } from "react";
import PassengerSidebar from "../../components/sidebar/PassengerSidebar";
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
import { InputWithButton } from "../../components/SearchInput";
import UpdatePassengerForm from "./forms/UpdatePassenger";
import DeleteForm from "./forms/delete";

// const title = "Account Information - Administrator";

function PassengerInfo() {
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



  const headers = ['Passenger ID','Passenger Name', 'NIC', 'Email', 'Mobile'];
    const data = [
      { 'Passenger ID': '1', 'Passenger Name': 'A B Perera', NIC: '978552222V', Email:'ann@gmail.com', Mobile: '9477123456'},
      { 'Passenger ID': '2', 'Passenger Name': 'A B Perera', NIC: '978552222V', Email:'ann@gmail.com', Mobile: '9477123456'},
      { 'Passenger ID': '3', 'Passenger Name': 'A B Perera', NIC: '978552222V', Email:'ann@gmail.com', Mobile: '9477123456'},
      { 'Passenger ID': '4', 'Passenger Name': 'A B Perera', NIC: '978552222V', Email:'ann@gmail.com', Mobile: '9477123456'},
      // Add more data objects as needed
    ];
    const btns = [
        <Button variant="filled" color="red" onClick={() => setShowDeleteForm(true)}>Delete</Button>,
        <Button variant="filled" color="blue" onClick={() => setShowUpdateForm(true)}>Update</Button>,
      ];


      const headers2 = ['Train Reference','Train', 'Available Seats', 'From Station', 'To Station'];
    const data2 = [
      { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura'},
      { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura' },
      { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura' },
      { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura' },
      // Add more data objects as needed
    ];
    const btns2 = [
        <Button variant="filled" color="gray">Track Train</Button>,
      ];

      const handleCancelUpdate = () => {
        setShowUpdateForm(false);
      };
      const handleCancelDelete = () => {
        setShowDeleteForm(false);
      };



      return (
        <div className="form">
          <PassengerSidebar />
          <div className="container">
            <Navbar />
            <div className="formContainer">
              <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
                {/* ... */}
              </div>
    
              <div className="formContainer" style={{ border: "none", padding: "20px 10px 0px 10px", display: "flex", flexDirection: "row" }}>
                <div>
                  <div style={{ display: "flex", flexDirection: "row", marginBottom: "30px" }}>
                    <h2 className="title" style={{ flex: 2 }}>
                      Passenger Details
                    </h2>
                    <InputWithButton placeholder="Search Passenger" style={{ flex: 1 }} />
                  </div>
                  <CustomTable headers={headers} data={data} buttonComponents={btns} />
                  {showUpdateForm && (
                    <div className="update-form-overlay">
                      <UpdatePassengerForm onClose={handleCancelUpdate} />
                    </div>
                  )}
                  {showDeleteForm && (
                    <div className="update-form-overlay">
                      <DeleteForm onClose={handleCancelDelete} />
                    </div>
                  )}
                </div>
              </div>
              {/* ... */}
            </div>
          </div>
        </div>
      );
    }


export default PassengerInfo;
