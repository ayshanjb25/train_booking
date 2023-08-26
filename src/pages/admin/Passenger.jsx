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
import {
  Button,
  Group,
  TextInput,
  createStyles,
  rem,
  Textarea,
  PasswordInput,
  Select,
} from "@mantine/core";
import axios from "axios";
import CustomTable from "../../components/table/Table";
import { InputWithButton } from "../../components/SearchInput";
import UpdatePassengerForm from "./forms/UpdatePassenger";
import DeleteForm from "./forms/delete";
import AdminSidebar from "../../components/sidebar/AdminSidebar";

// const title = "Account Information - Administrator";

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
  const { classes } = useStyles();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstname: event.target.elements.firstname.value,
      lastname: event.target.elements.lastname.value,
      mobile: event.target.elements.mobile.value,
      nic: event.target.elements.nic.value,
      address: event.target.elements.address.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
      userRole: event.target.elements.userRole.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/register",
        formData
      );
      console.log("User added successfully:", response.data);
      fetchUsers();
      //fetchStations(); // Fetch stations again to update the list
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };


  const headers2 = ['Passenger Reference','Full Name', 'NIC', 'Email','Mobile','Address' ];

  const tableData = users
  .filter((user) => (user.userRole == 'passenger' || user.userRole == 'Passenger' )) // Filter users with userRole 'admin'
  .map((user) => ({
    'Passenger Reference': user._id,
    'Full Name': user.firstname + ' ' + user.lastname,
    //'User Role': user.userRole,
    NIC: user.nic,
    Email: user.email,
    Mobile: user.mobile,
    Address: user.address,
    EditButton: (
      <Button key={`${user._id}-update`} variant="filled" color="blue">
        Edit User
      </Button>
    ),
    DeleteButton: (
      <Button key={`${user._id}-delete`} variant="filled" color="red">
        Delete User
      </Button>
    ),
  })); 

 

      return (
        <div className="form">
          <AdminSidebar />
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
    </div>
  );
}

export default PassengerInfo;