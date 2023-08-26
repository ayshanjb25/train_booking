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
import AdminSidebar from "../../components/sidebar/AdminSidebar";


function Loyalty() {
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




  const headers = ['Loyalty ID','Loyalty Level', 'Mileage', 'Points', 'Description'];
    const data = [
      { 'Loyalty ID': '1', 'Loyalty Level': 'Silver', 'Mileage': '50km', 'Points':'100', 'Description':'A silver passenger'},
      { 'Loyalty ID': '2', 'Loyalty Level': 'Gold', 'Mileage': '175km', 'Points':'200', 'Description':'A gold passenger' },
      { 'Loyalty ID': '3', 'Loyalty Level': 'Platinum', 'Mileage': '250km', 'Points':'400', 'Description':'A platinum passenger' },
      { 'Loyalty ID': '4', 'Loyalty Level': 'Advanced', 'Mileage': '500km', 'Points':'1000', 'Description':'An advanced passenger' },
      // Add more data objects as needed
    ];
    const btns = [
        <Button variant="filled" color="blue">Edit Loyalty</Button>,
        <Button variant="filled" color="red">Delete</Button>,
      ];


      const headers2 = ['Pasenger ID','Passenger Name', 'Loyalty Level', 'Points'];
    const data2 = [
      { 'Pasenger ID': '1', 'Passenger Name': 'Ann Fernando', 'Loyalty Level': 'Gold', 'Points': '210'},
      { 'Pasenger ID': '2', 'Passenger Name': 'Paul De Silva', 'Loyalty Level': 'Silver', 'Points': '90'},
      { 'Pasenger ID': '3', 'Passenger Name': 'Edward Perera', 'Loyalty Level': 'Advanced', 'Points': '800'},
      { 'Pasenger ID': '4', 'Passenger Name': 'Sally Rodrigo', 'Loyalty Level': 'Platinum', 'Points': '380'},
      // Add more data objects as needed
    ];
    const btns2 = [
        <Button variant="filled" color="gray">View Details</Button>,
        
      ];





  return (
    <div className="form">
      <AdminSidebar />
      <div className="container">
        <Navbar />
        <div className="formContainer">
          <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
          <div style={{ flex: 2 }}>
              <h2 className="title">Add Loyalty Levels</h2>
              <form
                component="form"
                maw={400}
                mx="auto"
                onSubmit={form.onSubmit(() => {})}
              >
                <TextInput
                  label="Loyalty Level"
                  placeholder="Enter Loyalty Name"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("username")}
                  
                />
                <TextInput
                  label="Mileage"
                  placeholder="Enter Total Milage"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("username")}
                  
                />

                <TextInput
                  label="Points"
                  placeholder="Enter Points applicable"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("username")}
                  
                />
                <Textarea
                  label="Description"
                  placeholder="Enter Description"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("username")}
                  
                />
                <div style={{marginTop:"20px", }}>
                <Button variant="filled" color="blue">Add Loyalty</Button></div>

                
              </form>
            </div>

            {/* <div style={{ flex: 2 }}>
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

                
              </form>
            </div> */}

            {/* <div style={{flex:2}} className="imageWrapper">
                <img src="https://www.news.lk/media/k2/items/cache/9ae1b773f33191448481aaddfbbcbf85_XL.jpg" alt="" />
              </div> */}
            {/* <div style={{ flex: 2 }}>
              <h2 className="title">{title}</h2>
              <form
                component="form"
                maw={400}
                mx="auto"
                onSubmit={form.onSubmit(() => {})}
              >
                <TextInput
                  label="Username"
                  placeholder="Username"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("username")}
                  disabled
                />
                <p
                  style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}
                >
                  You cannot change your username
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "15px",
                  }}
                >
                  <TextInput
                    label="First Name"
                    placeholder="First Name"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps("fname")}
                    style={{ flex: 1 }}
                  />

                  <TextInput
                    label="Last Name"
                    placeholder="Last Name"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps("lname")}
                    style={{ flex: 1 }}
                  />
                </div>

                <TextInput
                  label="Email"
                  placeholder="Email"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("email")}
                  disabled
                />

                <TextInput
                  label="NIC"
                  placeholder="NIC"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("nic")}
                />

                <TextInput
                  label="Mobile No"
                  placeholder="+94-"
                  withAsterisk
                  mt="md"
                  {...form.getInputProps("mobile")}
                />

                <Group position="right" mt="md">
                  <Button type="submit">Reset</Button>
                  <Button type="submit">Submit</Button>
                </Group>
              </form>
            </div> */}
          </div>
          {/* <div className="passwordReset">
            <h3>Reset Existing Password</h3>
            <p>
              To reset your password you should provide your existing password
              and then we will update your new password to our system{" "}
            </p>

            {!showPasswordReset ? (
              <Button className="btn2" onClick={handlePasswordResetClick}>
                Reset Password
              </Button>
            ) : (
              <div className="resetPassword">
                <form>
                  <TextInput
                    label="New Password"
                    placeholder="New Password"
                    withAsterisk
                    mt="md"
                    // {...form.getInputProps('email')}
                  />
                  <TextInput
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    withAsterisk
                    mt="md"
                    // {...form.getInputProps('email')}
                  />
                  <Group position="right" mt="md">
                    <Button
                      className="btn2"
                      onClick={handlePasswordResetCancel}
                    >
                      Cancel
                    </Button>
                    <Button className="btn2">Save</Button>
                  </Group>
                </form>
              </div>
            )}
          </div> */}
        </div>


    <div className='formContainer' style={{ border: 'none', padding: '20px 10px 0px 10px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>
        <h2 className='title'>Loyalty Level Details</h2>
        <CustomTable headers={headers} data={data} buttonComponents={btns} />
        </div>

        <div>
        <h2 className='title'>Passenger Loyalty Details</h2>
        <CustomTable headers={headers2} data={data2} buttonComponents={btns2} />
        </div>
    </div>

      </div>
    </div>
  );
}

export default Loyalty;
