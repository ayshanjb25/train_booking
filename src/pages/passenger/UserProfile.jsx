import React, { useState } from 'react';
import PassengerSidebar from '../../components/sidebar/PassengerSidebar'
import Navbar from '../../components/navbar/Navbar'
import '../forms/user.scss'

import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput } from '@mantine/core';

const title= "Account Information - Passenger"

function UserProfile() {
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

  return (
    <div className='form'>
      <PassengerSidebar/>
        <div className="container">
          <Navbar/>
            <div className="formContainer">
            <div style={{display:"flex", flexDirection:"row", gap:"50px"}} >
              <div style={{flex:2}} className="imageWrapper">
                <img src="https://www.news.lk/media/k2/items/cache/9ae1b773f33191448481aaddfbbcbf85_XL.jpg" alt="" />
              </div>
              <div style={{flex:2}}>
                <h2 className='title'>{title}</h2>
                <form component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => {})}>
                  <TextInput 
                  label="Username" 
                  placeholder="Username" 
                  withAsterisk 
                  mt="md"
                  {...form.getInputProps('username')} 
                  disabled/>
                  <p style={{fontSize:"12px", color:"gray", marginTop:"10px"}}>You cannot change your username</p>
                  <div style={{display:"flex", flexDirection:"row" , justifyContent:"space-between", gap:"15px"}}>
                    <TextInput 
                    label="First Name" 
                    placeholder="First Name" 
                    withAsterisk 
                    mt="md"
                    {...form.getInputProps('fname')}
                    style={{flex:1}} />

                    <TextInput 
                    label="Last Name" 
                    placeholder="Last Name" 
                    withAsterisk 
                    mt="md"
                    {...form.getInputProps('lname')} 
                    style={{flex:1}}/>

                  </div>

                  <TextInput
                    label="Email"
                    placeholder="Email"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps('email')}
                    disabled
                  />

                  <TextInput
                    label="NIC"
                    placeholder="NIC"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps('nic')}
                  />
                  
                  <TextInput
                    label="Mobile No"
                    placeholder="+94-"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps('mobile')}
                  />


                  <Group position="right" mt="md">
                    <Button type="submit">Reset</Button>
                    <Button type="submit">Submit</Button>
                  </Group>
                </form>
              </div></div>
              <div className='passwordReset'>
                     <h3>Reset Existing Password</h3>
                     <p>To reset your password you should provide your existing password and then we will update your new password to our system </p>
                     
                     {!showPasswordReset ? (
                     <Button className="btn2" onClick={handlePasswordResetClick}>Reset Password</Button>
                     ):(
                     <div className='resetPassword'>
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
                  <Button className="btn2" onClick={handlePasswordResetCancel}>Cancel</Button>
                  <Button className="btn2">Save</Button></Group>

                      </form>


                     </div>)}
                   </div>
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
