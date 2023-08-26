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

// const title = "Account Information - Administrator";

function PassengerTravelHistory() {
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




  const headers = ['Passenger ID','Passenger Name', 'Last Travel Date', 'Average Travel Per Month'];
    const data = [
      { 'Passenger ID': '1', 'Passenger Name': 'A B Perera', 'Last Travel Date': '12 July 2023', 'Average Travel Per Month':'5'},
      { 'Passenger ID': '2', 'Passenger Name': 'A B Perera', 'Last Travel Date': '12 July 2023', 'Average Travel Per Month':'10' },
      { 'Passenger ID': '3', 'Passenger Name': 'A B Perera', 'Last Travel Date': '12 July 2023', 'Average Travel Per Month':'20' },
      { 'Passenger ID': '4', 'Passenger Name': 'A B Perera', 'Last Travel Date': '12 July 2023', 'Average Travel Per Month':'22' },
      // Add more data objects as needed
    ];
    const btns = [
        // <Button variant="filled" color="gray">Track Train</Button>,
      ];


      const headers2 = ['Passenger ID','Passenger Name', 'Total Travel Mileage', 'Average Mileage per month', 'Most Travelled Location'];
    const data2 = [
      { 'Passenger ID': '1', 'Passenger Name': 'A B Perera', 'Total Travel Mileage': '120km', 'Average Mileage per month': '10km', 'Most Travelled Location':'Anuradhapura'},
      { 'Passenger ID': '2', 'Passenger Name': 'A B Perera', 'Total Travel Mileage': '150km', 'Average Mileage per month': '15km', 'Most Travelled Location':'Kandy' },
      { 'Passenger ID': '3', 'Passenger Name': 'A B Perera', 'Total Travel Mileage': '200km', 'Average Mileage per month': '20km', 'Most Travelled Location':'Galle' },
      { 'Passenger ID': '4', 'Passenger Name': 'A B Perera', 'Total Travel Mileage': '70km', 'Average Mileage per month': '7km', 'Most Travelled Location':'Negombo' },
      // Add more data objects as needed
    ];
    const btns2 = [
        <Button variant="filled" color="blue">View Travel Details</Button>,
      ];





  return (
    <div className="form">
      <AdminSidebar />
      <div className="container">
        <Navbar />
        <div className="formContainer">
          <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
          {/* <div style={{ flex: 2 }}>
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
                  {...form.getInputProps("username")}
                  
                />

                <TextInput
                  label="Location"
                  placeholder="Enter Location"
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

                
              </form>
            </div> */}

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
        <h2 className='title'>Passenger Travel Frequency</h2>
        <CustomTable headers={headers} data={data} buttonComponents={btns} />
        </div>

        <div>
        <h2 className='title'>Passenger Travel History</h2>
        <CustomTable headers={headers2} data={data2} buttonComponents={btns2} />
        </div>
    </div>

      </div>
    </div>
  );
}

export default PassengerTravelHistory;

