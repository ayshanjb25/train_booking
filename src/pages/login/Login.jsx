import React, { useContext, useState } from 'react';
import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    rem,
  } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: rem(900),
      backgroundSize: 'cover',
      backgroundImage:
        'url(https://www.fodors.com/wp-content/uploads/2020/01/srilankatrain5.jpg)',
    },
  
    form: {
      borderRight: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
      minHeight: rem(900),
      maxWidth: rem(450),
      paddingTop: rem(80),
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  }));
  
  export const Login = () => {

    const [credentials, setCredentials] = useState({
      email:undefined,
      password:undefined
    });

    const {user,loading, error, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e)=>{
      setCredentials((prev)=>({...prev, [e.target.id]:e.target.value}))
    }     

    const handleLogin = async e =>{
      e.preventDefault()
      dispatch({type:"LOGIN_START"})

      try {
        const res = await axios.post("/auth/login", credentials);
        dispatch({type:"LOGIN_SUCCESS", payload:res.data});
        if (res.data.userRole === 'admin') {
          // Navigate to the admin page
          navigate('/admin');
        } else {
          // Navigate to the default page (you can modify this based on your app logic)
          navigate('/');
        }
      } catch (err) {
        dispatch({type:"LOGIN_FAILURE", payload:err.response.data});
      }
    }


console.log(user);


    const { classes } = useStyles();
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Welcome to Book Your Train!
          </Title>
  
          <TextInput label="Email address" placeholder="hello@gmail.com" id="email" size="md" onChange={handleChange}/>
          <PasswordInput label="Password" placeholder="Your password" id="password" mt="md" size="md" onChange={handleChange}/>
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button disabled={loading} fullWidth mt="xl" size="md" onClick={handleLogin}>
            Login
          </Button>
          {error && <span>{error.message}</span>}
          <p style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold',alignItems:'center',justifyContent:'center',marginTop: '16px', marginLeft: '40px' }}>
          Do not have an account? <Link style={{}} to="/register">Register here</Link>
          </p>
          <div>
            <p style={{marginTop: '50px', fontSize: '20px', fontWeight: 'bold'}}>Contact Us</p>
            <p style={{marginTop: '20px'}}>Book Your Train Headquaters,</p>
            <p>No. 101, Galle Road,</p>
            <p>Colombo 04, Sri Lanka.</p>
            <p>Telephone : +94771256633 or 011251133</p>
            <p>Email: bookyourtrain@gmail.com</p>
          </div>
          <div>
          <p style={{marginTop: '45px', fontSize: '20px', fontWeight: 'bold'}}>Terms an Conditions</p>
          <Button style={{ backgroundColor: 'grey', color: 'white', fontWeight: 'bold',alignItems:'left',justifyContent:'center',marginTop: '16px'}}>
          Click here
          </Button>
          </div>
  
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
