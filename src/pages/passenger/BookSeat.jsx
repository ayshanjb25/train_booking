import React, { useState } from 'react';
import PassengerSidebar from '../../components/sidebar/PassengerSidebar'
import QtyInput from '../../components/QtyInput'
import Navbar from '../../components/navbar/Navbar'
import '../forms/user.scss'
import { DatePickerInput } from '@mantine/dates';
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { createStyles, rem, Select, Button, Group, TextInput} from '@mantine/core';
import CustomTable from '../../components/table/Table';

const title= "Book your seat"
const title2= "Available Trains"
const useStyles = createStyles((theme) => ({
    root: {
      position: 'relative',
      
    },
  
    input: {
      height: rem(54),
      paddingTop: rem(18),
      
    },
  
    label: {
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: theme.fontSizes.xs,
      paddingLeft: theme.spacing.sm,
      paddingTop: `calc(${theme.spacing.sm} / 2)`,
      zIndex: 1,
    },
  }));
  
function UserProfile() {
    const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      username: '',
      fname: '',
      lname: '',
      nic: '',
      email: '',
      mobile: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
    },
    
  });

  const headers = ['Train Reference','Train', 'Available Seats', 'From Station', 'To Station', 'Date', 'Start Time', 'Reach Time'];
    const data = [
      { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura', Date:'10-12-2023', 'Start Time':'12.00pm', 'Reach Time':'3.00pm'},
      { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura', Date:'10-12-2023', 'Start Time':'12.00pm', 'Reach Time':'3.00pm' },
      { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura', Date:'10-12-2023', 'Start Time':'12.00pm', 'Reach Time':'3.00pm' },
      { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura', Date:'10-12-2023', 'Start Time':'12.00pm', 'Reach Time':'3.00pm' },
      // Add more data objects as needed
    ];
    const btns = [
      <div style={{display: "flex", gap:"10px"}}><Button variant="filled" color="gray">Track Train</Button>
        <Button variant="filled" color="green">Book Train</Button></div>
        
      ];

  return (
    <div className='form'>
      <PassengerSidebar/>
        <div className="container">
          <Navbar/>
            <div className="formContainer" style={{display:"flex", flexDirection:"row"}}>
              
              <div className="bookingDiv" style={{flex:1}}>
                <div className="content"><h2 className='title'>{title}</h2>
                <p>You can book both ways</p></div>
                
              </div>
                <div  style={{flex:2}}>
                <form component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => {})}>

                <div className="bookDiv" style={{marginBottom: "20px"}}>
                <Select
                    mt="md"
                    withinPortal
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                    placeholder="Choose Station"
                    label="From"
                    classNames={classes}
                    style={{flex:1}}
                />

                <Select
                    mt="md"
                    withinPortal
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                    placeholder="Choose Station"
                    label="To"
                    classNames={classes}
                    style={{flex:1}}
                />

                <DatePickerInput
                    mt="md"
                    popoverProps={{ withinPortal: true }}
                    label="Departure date"
                    placeholder="When will you leave?"
                    classNames={classes}
                    clearable={false}
                    style={{flex:1}}
                />
                </div>

                  {/* <TextInput 
                  label="No of Passengers" 
                  placeholder="No of Passengers" 
                  withAsterisk 
                  mt="md"
                  {...form.getInputProps('passengerNo')} 
                  /> */}

                  <div className="bookDiv" >
                    <p style={{fontSize:"14px", margin:"10px 0 0 10px"}}>No of Passengers</p>

                  <QtyInput/>



                  </div>

                 <div className="bookDiv" >
                <Select
                    mt="md"
                    withinPortal
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                    placeholder="Choose Station"
                    label="Seating Preference"
                    classNames={classes}
                    style={{flex:1}}
                />

                <Select
                    mt="md"
                    withinPortal
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                    placeholder="Choose Station"
                    label="To"
                    classNames={classes}
                    style={{flex:1}}
                />

                </div>


                  <Group position="right" mt="md">
                  <Button type="submit">Search</Button>
                    <Button type="submit">Reset</Button>
                    
                  </Group>
                  

                  
                 

                  
                </form>

                
              </div>
              
              
            </div>
            

            <div className='formContainer' style={{border:"none",padding:"20px 10px 0px 10px", flexDirection: "column"}}>
            <h2 className='title'>{title2}</h2>
            <CustomTable headers={headers}
                        data={data}
                        buttonComponents={btns}
                        />
            </div>
            
        </div>
        
    </div>
  );
}






















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

export default UserProfile;
