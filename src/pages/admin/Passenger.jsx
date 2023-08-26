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

function PassengerInfo({userData}) {


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
        


        <div className='formContainer' style={{border:"none",padding:"20px 10px 0px 10px",display:"flex", flexDirection: "row"}}>

            <div style={{flex:2}}>
            <h2 className='title'>Passengers</h2>
            <CustomTable headers={headers2}
                        data={tableData}
                        />

            </div>
            
            
            
            
        </div>
      </div>
    </div>
  );
}

export default PassengerInfo;