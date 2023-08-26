import React, { useEffect, useState } from "react";
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
import axios from "axios";
import ViewTravel from "./forms/ViewTravelDetails";

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

 

  const [showOriginalForm, setShowOriginalForm] = useState(true);

 

  const [travels, setTravel] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTravel();
  }, []);


  const fetchTravel = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/travelHistory");
      setTravel(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching travel history:", error);
      setLoading(false);
    }
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


      const headers2 = ['Passenger ID','Passenger Name', "Date", "From Location","To Location","Distance","Train", "Ticket Count","Amount Paid","Points Earned"];// const data2 = [
    //   { 'Passenger ID': '1', 'Passenger Name': 'A B Perera', 'Total Travel Mileage': '120km', 'Average Mileage per month': '10km', 'Most Travelled Location':'Anuradhapura',EditButton:<Button variant="filled" color="blue">View Travel Details</Button>},
    //   { 'Passenger ID': '2', 'Passenger Name': 'A B Perera', 'Total Travel Mileage': '150km', 'Average Mileage per month': '15km', 'Most Travelled Location':'Kandy' ,EditButton:<Button variant="filled" color="blue">View Travel Details</Button>},
    //   { 'Passenger ID': '3', 'Passenger Name': 'A B Perera', 'Total Travel Mileage': '200km', 'Average Mileage per month': '20km', 'Most Travelled Location':'Galle' ,EditButton:<Button variant="filled" color="blue">View Travel Details</Button>},
    //   { 'Passenger ID': '4', 'Passenger Name': 'A B Perera', 'Total Travel Mileage': '70km', 'Average Mileage per month': '7km', 'Most Travelled Location':'Negombo' ,EditButton:<Button variant="filled" color="blue">View Travel Details</Button>},
    //   // Add more data objects as needed
    // ];
    
    const [showViewForm, setShowViewForm] = useState(false);
    const [selectedTravel, setSelectedTravel] = useState(null);

    const handleViewClick = (travel) => {
      setShowViewForm(true);
      setSelectedTravel(travel); // Store the selected station data
    };


      

  const tableData = travels.map((travel) => ({
    'Passenger ID': '1', 
    'Passenger Name': 'A B Perera', 
    "Date":travel.date,
    "From Location":travel.fromLocation,
    "To Location": travel.toLocation,
    "Distance": travel.distance,
    "Train": travel.train,
    "Ticket Count": travel.ticketCount,
    "Amount Paid":travel.amountPaid,
    "Points Earned":travel.pointsEarned,
    EditButton: (
      <Button key={`${travel._id}-view`} variant="filled" color="blue" onClick={() => handleViewClick(travel)}>View Travel Details</Button>
    )
  }));





  return (
    <div className="form">
      <AdminSidebar />
      <div className="container">
        <Navbar />
        <div className="formContainer">
          <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
          <div style={{ marginBottom: '20px' }}>
        <h2 className='title'>Passenger Travel Frequency</h2>
        <CustomTable headers={headers} data={data} buttonComponents={btns} />
        </div>
          </div>
          
        </div>


        <div className="formContainer">
          <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
          <div style={{ marginBottom: '20px' }}>
        <h2 className='title'>Passenger Travel History</h2>
        <CustomTable headers={headers2} data={tableData} />


        {showViewForm && (
                <div className="update-form-overlay">
                  <ViewTravel
                    onClose={() => setShowViewForm(false)}
                    selectedTravel={selectedTravel}
                  />
                </div>
              )}
        </div>
        </div>
    </div>

      </div>
    </div>
  );
}

export default PassengerTravelHistory;

