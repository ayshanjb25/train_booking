import React, { useEffect, useState } from 'react';
import PassengerSidebar from '../../components/sidebar/PassengerSidebar'
import QtyInput from '../../components/QtyInput'
import Navbar from '../../components/navbar/Navbar'
import '../forms/user.scss'
import { DatePickerInput } from '@mantine/dates';
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { createStyles, rem, Select, Button, Group, TextInput} from '@mantine/core';
import CustomTable from '../../components/table/Table';
import BookTrainForm from './forms/BookTrain';
import { Link } from 'react-router-dom';

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
  
function BookSeat({availableTrainData}) {
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


  const [availableTrains, setavailableTrains] = useState([]);

  useEffect(() => {
    // Fetch station data from the backend when the component mounts

    fetch('http://localhost:8800/api/available-trains',{
      method:"GET",
    })
    .then(response => response.json())
      .then((data)=>{
        console.log(data, "availableTrainData" )
        setavailableTrains(data);
      })
      // .catch(error => console.error(error));
  }, []);
  const [showBookTrainForm, setShowBookTrainForm] = useState(false);

  const currentDate = new Date();
  const headers = ['Train Reference','Train', 'Available Seats', 'From Station', 'To Station', 'Date', 'Start Time', 'Reach Time','Price'];

  const tableData = availableTrains.map((availableTrain) => ({
    // 'Station Reference':station._id,
    // Station: station.name,
    // Location:station.location,
    // Description: station.description

    'Train Reference':0,
    // Train:availableTrain.train.name, 
    // 'Available Seats':availableTrain.train.capacity, 
    'From Station':availableTrain.startLocation,  
    'To Station':availableTrain.stopLocation, 
    'Date':currentDate.toISOString().split('T')[0],
    'Start Time':availableTrain.startTime,
    'Reach Time':availableTrain.reachTime,
    'Price':availableTrain.price
  }));  
    // const data = [
    //   { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura', Date:'10-12-2023', 'Start Time':'12.00pm', 'Reach Time':'3.00pm'},
    //   { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura', Date:'10-12-2023', 'Start Time':'12.00pm', 'Reach Time':'3.00pm' },
    //   { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura', Date:'10-12-2023', 'Start Time':'12.00pm', 'Reach Time':'3.00pm' },
    //   { 'Train Reference': '1', Train: 'Colombo Express', 'Available Seats': 6, 'From Station': 'Colombo', 'To Station':'Anuradhapura', Date:'10-12-2023', 'Start Time':'12.00pm', 'Reach Time':'3.00pm' },
    //   // Add more data objects as needed
    // ];
    const btns = [
      <div style={{display: "flex", gap:"10px"}}><Button variant="filled" color="gray">Track Train</Button>
          
        <Link to="/booktrain"><Button variant="filled" color="green" >Book Train</Button></Link></div>
        
      ];
      const handleCancelBookTrain = () => {
        setShowBookTrainForm(false);
      };






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
                        data={tableData}
                        buttonComponents={btns}
                        />
                        {showBookTrainForm && (
                    <div className="update-form-overlay">
                      <BookTrainForm onClose={handleCancelBookTrain} />
                    </div>
                  )}
            </div>
            
        </div>
        
    </div>
  );
}



export default BookSeat;
