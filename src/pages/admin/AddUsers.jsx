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

const title = "User Management - Add Users";

const useStyles = createStyles((theme) => ({
  // wrapper: {
  //   minHeight: rem(900),
  //   backgroundSize: 'cover',
  //   backgroundImage:
  //     'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.visitsrilankatours.co.uk%2Ftrain-tickets-1.html&psig=AOvVaw116e0mMleolOccWKeOyrGb&ust=1691299295064000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjGlIHjxIADFQAAAAAdAAAAABAd)',
  // },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    //   minHeight: rem(900),
    //   maxWidth: rem(600),
    //   paddingTop: rem(80),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

function AddUser({userData}) {


  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/users');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

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


  const headers2 = ['User Reference','Full Name', 'User Role','NIC', 'Email','Mobile','Address' ];

  const tableData = users
  .filter((user) => (user.userRole != 'passenger')) // Filter users with userRole 'admin'
  .map((user) => ({
    'User Reference': user._id,
    'Full Name': user.firstname + ' ' + user.lastname,
    'User Role': user.userRole,
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
            {/* <div style={{flex:2}} className="imageWrapper">
                <img src="https://www.news.lk/media/k2/items/cache/9ae1b773f33191448481aaddfbbcbf85_XL.jpg" alt="" />
              </div> */}
            <div style={{ flex: 2 }}>
              <h2 className="title">{title}</h2>
              <div className={classes.wrapper}>
                <form onSubmit={handleSubmit}>
                  <div
                    style={{ display: "flex", gap: "50px", marginTop: "10px" }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          marginTop:'15px'
                        }}
                      >
                        <TextInput
                          label="First Name"
                          name="firstname"
                          placeholder="Enter your First name"
                          size="md"
                        />
                        <TextInput
                          label="Last Name"
                          name="lastname"
                          placeholder="Enter your Last name"
                          size="md"
                        />
                        <Select
                          label="User Role"
                          name="userRole"
                          placeholder="Select a role"
                          data={[
                            { value: "Admin", label: "Admin" },
                            { value: "Passenger", label: "Passenger" },
                          ]}
                          size="md"
                        />
                        <Textarea
                          label="Address"
                          name="address"
                          placeholder="Enter your address here"
                          size="md"
                        />
                        <TextInput
                          label="Email address"
                          name="email"
                          placeholder="Enter your Email"
                          mt="md"
                          size="md"
                        />
                      </div>
                    </div>

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                        }}
                      >
                        <TextInput
                          label="NIC"
                          name="nic"
                          placeholder="Enter your NIC"
                          mt="md"
                          size="md"
                        />
                        <TextInput
                          label="Mobile Number"
                          name="mobile"
                          placeholder="+94xxxxxxxxx"
                          mt="md"
                          size="md"
                        />
                        <PasswordInput
                          label="Password"
                          placeholder="Enter password"
                          mt="md"
                          size="md"
                        />
                        <PasswordInput
                          label="Confirm Password"
                          name="password"
                          placeholder="Confirm password"
                          mt="md"
                          size="md"
                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    fullWidth
                    mt="xl"
                    size="md"
                    style={{ width: "400px" }}
                  >
                    Create User
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>


        <div className='formContainer' style={{border:"none",padding:"20px 10px 0px 10px",display:"flex", flexDirection: "row"}}>

            <div style={{flex:2}}>
            <h2 className='title'>Users</h2>
            <CustomTable headers={headers2}
                        data={tableData}
                        />

            </div>
            
            
            
            
        </div>
      </div>
    </div>
  );
}

export default AddUser;

// const title= "Account Information - Passenger"
// const User = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here, such as sending the data to an API
//     console.log(formData);
//     // Reset the form
//     setFormData({
//       name: '',
//       email: '',
//       password: '',
//     });
//   };

//   return (

//     <div className='form'>
//             <Sidebar/>
//             <div className="container">
//                 <Navbar/>
//               <div className="formContainer">
//                 <div>
//                   <img src="https://www.news.lk/media/k2/items/cache/9ae1b773f33191448481aaddfbbcbf85_XL.jpg" alt="" />
//                 </div>
//                 <h2 className='title'>{title}</h2>

//                 <div className="form">

//                   <form onSubmit={handleSubmit}>
//                       <div className="formItem">
//                           <label htmlFor="username">User Name:</label>
//                           <input
//                           type="text"
//                           id="username"
//                           name="username"
//                           value={formData.username}
//                           onChange={handleChange}
//                           disabled
//                           />
//                       </div>

//                       <div  style={{display:"flex", gap:"50px"}}>
//                           <div className="formItem">
//                             <label htmlFor="fname">First Name:</label>
//                           <input
//                           type="text"
//                           id="fname"
//                           name="fname"
//                           value={formData.fname}
//                           onChange={handleChange}
//                           />
//                           </div>
//                           <div className="formItem">
//                           <label htmlFor="lame">Last Name:</label>
//                           <input
//                           type="text"
//                           id="lname"
//                           name="lname"
//                           value={formData.lname}
//                           onChange={handleChange}
//                           />
//                           </div>
//                       </div>
//                       <div className="formItem">
//                           <label htmlFor="email">Email:</label>
//                           <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           disabled
//                           />
//                       </div>
//                       <div className="formItem">
//                           <label htmlFor="password">Password:</label>
//                           <input
//                           type="password"
//                           id="password"
//                           name="password"
//                           value={formData.password}
//                           onChange={handleChange}
//                           />
//                       </div>

//                       <div className="formItem">
//                           <label htmlFor="mobile">Mobile No:</label>
//                           <input
//                           type="text"
//                           id="mobile"
//                           name="mobile"
//                           value={formData.mobile}
//                           onChange={handleChange}
//                           />
//                           </div>

//                   <div className='passwordReset'>
//                     <h3>Reset Existing Password</h3>
//                     <p>To reset your password you should provide your existing password and then we will update your new password to our system </p>
//                     <button className="btn2">Reset Password</button>
//                   </div>

//                     <div className='btns'>
//                     <button type="submit" className="btn1">Reset</button>
//                     <button type="submit" className="btn2">Submit</button>
//                     </div>

//                   </form>

//                   </div>

//                 </div>

//             </div>
//         </div>

//   );
// };
