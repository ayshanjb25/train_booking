import React, { useState } from "react";
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import Navbar from "../../components/navbar/Navbar";
import "../forms/user.scss";
import { Button, TextInput } from "@mantine/core";

const title = "Account Information - Administrator";
const AdminUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, such as sending the data to an API
    console.log(formData);
    // Reset the form
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="form">
      <AdminSidebar />
      <div className="container">
        <Navbar />
        <div className="formContainer">
          <h2 className="title">{title}</h2>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="formItem">
                {/* <label htmlFor="username">User Name:</label> */}
                <TextInput
                  label="Username"
                  placeholder="Username"
                  withAsterisk
                  mt="md"
                  // {...form.getInputProps('username')}
                  disabled
                />
              </div>

              <div className="formItem">
                {/* <label htmlFor="fname">First Name:</label> */}
                <TextInput
                  // type="text"
                  // id="fname"
                  // name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  label="First Name"
                  placeholder="First Name"
                  withAsterisk
                  mt="md"
                />
              </div>
              <div className="formItem">
                {/* <label htmlFor="lame">Last Name:</label> */}
                
                  <TextInput
                  // type="text"
                  // id="fname"
                  // name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  label="Last Name"
                  placeholder="Last Name"
                  withAsterisk
                  mt="md"
        
                />
              </div>

              <div className="formItem">
                {/* <label htmlFor="email">Email:</label> */}
                <TextInput
                  // type="text"
                  // id="fname"
                  // name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  label="Email"
                  placeholder="Email"
                  withAsterisk
                  mt="md"
                  disabled
                />
              </div>
              <div className="formItem">
                {/* <label htmlFor="password">Password:</label> */}
                <TextInput
                  type="password"
                  // id="password"
                  // name="password"
                  label="Password"
                  placeholder="Password"
                  withAsterisk
                  mt="md"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="formItem">
                {/* <label htmlFor="mobile">Mobile No:</label> */}
                <TextInput
                  // type="text"
                  // id="mobile"
                  // name="mobile"
                  label="Mobile No"
                  placeholder="Mobile No"
                  withAsterisk
                  mt="md"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              <div className="passwordReset">
                <h3>Reset Existing Password</h3>
                <p>
                  To reset your password you should provide your existing
                  password and then we will update your new password to our
                  system{" "}
                </p>
                <Button className="btn2">Reset Password</Button>
              </div>

              <div className="btns">
                <Button type="submit" className="btn1">
                  Reset
                </Button>
                <Button type="submit" className="btn2">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
