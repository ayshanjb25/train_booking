import React, { useState }  from 'react';
import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Button,
    Title,
    rem,
    Textarea,
  } from '@mantine/core';
import axios from 'axios';
   
  const useStyles = createStyles((theme) => ({
    form: {
      borderRight: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
  
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

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
  export function Register() {
    const { classes } = useStyles();
  

    const [validation, setValidation] = useState({
      firstname: { error: '', isValid: false },
      lastname: { error: '', isValid: false },
      address: { error: '', isValid: false },
      email: { error: '', isValid: false },
      nic: { error: '', isValid: false },
      mobile: { error: '', isValid: false },
      password: { error: '', isValid: false },
    });


    const handleSubmit = async (event) => {

      event.preventDefault();



      let isValid = true;
  const newValidation = { ...validation };

  for (const field in newValidation) {
    if (!event.target.elements[field].value) {
      newValidation[field].isValid = false;
      newValidation[field].error = `${capitalizeFirstLetter(
        field
      )} is required`;
      isValid = false;
    } else {
      newValidation[field].isValid = true;
      newValidation[field].error = '';
    }
  }

  if (!isValid) {
    setValidation(newValidation);
    return;
  }

  // Clear errors when values are entered
  for (const field in newValidation) {
    newValidation[field].error = '';
  }

  setValidation(newValidation);



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
      const response = await axios.post('http://localhost:8800/api/auth/register', formData);
      console.log('User added successfully:', response.data);
      console.log(formData)
      //fetchStations(); // Fetch stations again to update the list
    } catch (error) {
      console.error('Error adding user:', error);
    }
    };
    
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Register for Book Your Train!
          </Title>
  <form onSubmit={handleSubmit}style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <TextInput label="First Name" name="firstname" placeholder="Enter your First name" size="md" style={{ width: '400px' }} error={validation.firstname.error}/>
          <TextInput label="Last Name" name="lastname" placeholder="Enter your Last name" size="md" style={{ width: '400px' }} error={validation.lastname.error}/>
         
          <Textarea label="Address" name="address" placeholder="Enter your address here" size="md" style={{ width: '400px' }} error={validation.address.error}/>
          <TextInput label="Email address" name="email" placeholder="Enter your Email" mt="md" size="md" style={{ width: '400px' }} error={validation.email.error}/>
          <TextInput label="NIC" name="nic" placeholder="Enter your NIC" mt="md" size="md" style={{ width: '400px' }} error={validation.nic.error}/>
          <TextInput label="Mobile Number" name="mobile" placeholder="+94xxxxxxxxx" mt="md" size="md" style={{ width: '400px' }} />
          <PasswordInput label="Password" placeholder="Enter password" mt="md" size="md" style={{ width: '400px' }} />
          <PasswordInput label="Confirm Password" name="password" placeholder="Confirm password" mt="md" size="md" style={{ width: '400px' }} />
          <TextInput name="userRole" value="passenger" mt="md" size="md" style={{ width: '400px', display: 'none' }} disabled/>
          <Button type="submit" fullWidth mt="xl" size="md" style={{ width: '400px' }}>
            Create Account
          </Button></form>
          
        </Paper>
      </div>
    );
  }
  export default Register;