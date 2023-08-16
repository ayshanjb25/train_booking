import React from 'react';
import { useContext, useState } from 'react';
import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    rem,
    Textarea,
  } from '@mantine/core';
import { alignProperty } from '@mui/material/styles/cssUtils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RegisterContext } from '../../context/RegisterContext';
   
  const useStyles = createStyles((theme) => ({
    // wrapper: {
    //   minHeight: rem(900),
    //   backgroundSize: 'cover',
    //   backgroundImage:
    //     'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.visitsrilankatours.co.uk%2Ftrain-tickets-1.html&psig=AOvVaw116e0mMleolOccWKeOyrGb&ust=1691299295064000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjGlIHjxIADFQAAAAAdAAAAABAd)',
    // },
  
    form: {
      borderRight: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    //   minHeight: rem(900),
    //   maxWidth: rem(600),
    //   paddingTop: rem(80),
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  }));



  
  export function Register() {
    const { classes } = useStyles();

    const [userData, setUserData] = useState({
      firstname:'',
      lastname:'',
      mobile:'',
      nic:'',
      address:'',
      email:'',
      password:'',
    });
   
  
    const {user,loading, error, dispatch} = useContext(RegisterContext);
  
      const navigate = useNavigate();
  
    const handleChange = (e)=>{
      setUserData((prev)=>({...prev, [e.target.id]:e.target.value}))
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/auth/register", userData);
        // const response = await registerUser(userData);
        dispatch({ type: 'REGISTER_SUCCESS', payload: res.data.user });
        navigate('/login');
        // Redirect or show success message
      } catch (err) {
        // Handle error (you can display an error message)
        // console.error(err);
        dispatch({type:"REGISTER_FAILURE", payload:err.response.data});
      }
    };
    






    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Register for Book Your Train!
          </Title>
  <form onSubmit={handleSubmit}>
          <TextInput label="First Name" id="firstname" placeholder="Enter your First name" size="md" style={{ width: '400px' }} onChange={handleChange}/>
          <TextInput label="Last Name" id="lastname" placeholder="Enter your Last name" size="md" style={{ width: '400px' }} onChange={handleChange}/>
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <p style={{marginRight:"30px"}}>Title</p>
            <Checkbox label="Mr" size="md" />
            <Checkbox label="Mrs" size="md" />
            <Checkbox label="Ms" size="md" />
            <Checkbox label="Rev" size="md" />
          </div>
          <Textarea label="Address" id="address" placeholder="Enter your address here" size="md" style={{ width: '400px' }} onChange={handleChange}/>
          <TextInput label="Email address" id="email" placeholder="Enter your Email" mt="md" size="md" style={{ width: '400px' }} onChange={handleChange}/>
          <TextInput label="NIC" id="nic" placeholder="Enter your NIC" mt="md" size="md" style={{ width: '400px' }} onChange={handleChange}/>
          <TextInput label="Mobile Number" id="mobile" placeholder="+94xxxxxxxxx" mt="md" size="md" style={{ width: '400px' }} onChange={handleChange}/>
          <PasswordInput label="Password" placeholder="Enter password" mt="md" size="md" style={{ width: '400px' }} onChange={handleChange}/>
          <PasswordInput label="Confirm Password" id="password" placeholder="Confirm password" mt="md" size="md" style={{ width: '400px' }} onChange={handleChange}/>
          <Button type="submit" fullWidth mt="xl" size="md" style={{ width: '400px' }}>
            Create Account
          </Button></form>
          {/* <Button style={{ backgroundColor: 'grey', color: 'white', fontWeight: 'bold',alignItems:'center',justifyContent:'center',marginTop: '16px', }}>
          Do not have an account? Register here
          </Button> */}
          
  
          {/* <Text ta="center" mt="md">
  Don&apos;t have an account?{' '}
  <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
    Register
  </Anchor>
</Text> */}
        </Paper>
      </div>
    );
  }
  export default Register;