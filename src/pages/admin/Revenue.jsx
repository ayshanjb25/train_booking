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
import { InputWithButton } from "../../components/SearchInput";

// const title = "Account Information - Administrator";

function Revenue() {
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




 


      const headers = ["Date", "From Location","To Location","Distance","Train", "Ticket Count","Amount Recieved"];// const data2 = [
        const headers2 = ["Date","Train", "Total Ticket Count","Total Amount Recieved"];// const data2 = [
        
    const [showViewForm, setShowViewForm] = useState(false);
    const [selectedTravel, setSelectedTravel] = useState(null);

    const handleViewClick = (travel) => {
      setShowViewForm(true);
      setSelectedTravel(travel); // Store the selected station data
    };




    const aggregatedData = [];
  travels.forEach((travel) => {
    const existingIndex = aggregatedData.findIndex(
      (item) => item.Date === travel.date && item.Train === travel.train
    );

    if (existingIndex !== -1) {
      // If the row with the same date and train exists, update the counts
      aggregatedData[existingIndex]["Total Ticket Count"] += travel.ticketCount;
      aggregatedData[existingIndex]["Total Amount Recieved"] += travel.amountPaid;
    } else {
      // Otherwise, add a new row to the aggregatedData array
      aggregatedData.push({
        Date: travel.date,
        Train: travel.train,
        "Total Ticket Count": travel.ticketCount,
        "Total Amount Recieved": travel.amountPaid
        
      });
    }
  });

      

  const tableData = travels.map((travel) => ({
    "Date":travel.date,
    "From Location":travel.fromLocation,
    "To Location": travel.toLocation,
    "Distance": travel.distance,
    "Train": travel.train,
    "Ticket Count": travel.ticketCount,
    "Amount Recieved":travel.amountPaid,
    EditButton: (
      <Button key={`${travel._id}-view`} variant="filled" color="blue" onClick={() => handleViewClick(travel)}>View Travel Details</Button>
    )
  }));



  const generatePrintableContent = () => {
    // Calculate the total ticket count and total amount received
    let totalTicketCount = 0;
    let totalAmountReceived = 0;
    aggregatedData.forEach((row) => {
      totalTicketCount += row['Total Ticket Count'];
      totalAmountReceived += row['Total Amount Recieved'];
    });
  
    // Create a string containing the HTML for the table
    const printableHTML = `
      <div style="align-items: center; justify-content: center; text-align: center; margin-top: 50px;">
        <h3 style="color: rgb(43, 43, 161);">BookMyTrain</h3>
        <h4>Total Revenue Details</h4>
      </div>
  
      <div style="padding: 20px 50px;">
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr style="border-bottom: 2px solid #000;">
              <th style="border: 1px solid #000; padding: 8px;">Date</th>
              <th style="border: 1px solid #000; padding: 8px;">Train</th>
              <th style="border: 1px solid #000; padding: 8px;">Total Ticket Count</th>
              <th style="border: 1px solid #000; padding: 8px;">Total Amount Received</th>
            </tr>
          </thead>
          <tbody>
            ${aggregatedData
              .map(
                (row) => `
                  <tr>
                    <td style="border: 1px solid #000; padding: 8px;">${row['Date']}</td>
                    <td style="border: 1px solid #000; padding: 8px;">${row['Train']}</td>
                    <td style="border: 1px solid #000; padding: 8px; text-align:right;">${row['Total Ticket Count']}</td>
                    <td style="border: 1px solid #000; padding: 8px; text-align:right;">LKR ${row['Total Amount Recieved']}</td>
                  </tr>
                `
              )
              .join('')}
            <tr style="border-top: 2px solid #000;">
              <td colspan="2" style="border: 1px solid #000; padding: 8px; font-weight: bold; ">Total</td>
              <td style="border: 1px solid #000; padding: 8px; font-weight: bold; text-align:right;">${totalTicketCount}</td>
              <td style="border: 1px solid #000; padding: 8px; font-weight: bold; text-align:right;">LKR ${totalAmountReceived}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  
    // Open a new window and write the printable content
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Printable Revenues Table</title>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
          </style>
        </head>
        <body>
          ${printableHTML}
        </body>
      </html>
    `);
  
    // Close the document after printing
    printWindow.document.close();
  
    // Print automatically
    printWindow.print();
  };
  
  


  const generatePrintableContentRevenues = () => {
    // Calculate the total ticket count and total amount received
    let totalTicketCount = 0;
    let totalAmountReceived = 0;
    tableData.forEach((row) => {
      totalTicketCount += row['Ticket Count'];
      totalAmountReceived += row['Amount Recieved'];
    });
  
    // Create a string containing the HTML for the table
    const printableHTML = `
      <div style="align-items: center; justify-content: center; text-align: center; margin-top:50px; ">
        <h3 style="color:rgb(43, 43, 161);">BookMyTrain</h3>
        <h4>Revenue Details</h4>
      </div>
  
      <div style="padding:20px 50px;">
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr style="border-bottom: 2px solid #000;">
              <th style="border: 1px solid #000; padding: 8px;">Date</th>
              <th style="border: 1px solid #000; padding: 8px;">From Location</th>
              <th style="border: 1px solid #000; padding: 8px;">To Location</th>
              <th style="border: 1px solid #000; padding: 8px;">Distance</th>
              <th style="border: 1px solid #000; padding: 8px;">Train</th>
              <th style="border: 1px solid #000; padding: 8px;">Ticket Count</th>
              <th style="border: 1px solid #000; padding: 8px;">Amount Recieved</th>
            </tr>
          </thead>
          <tbody>
            ${tableData
              .map(
                (row) => `
                  <tr>
                    <td style="border: 1px solid #000; padding: 8px;">${row['Date']}</td>
                    <td style="border: 1px solid #000; padding: 8px;">${row['From Location']}</td>
                    <td style="border: 1px solid #000; padding: 8px;">${row['To Location']}</td>
                    <td style="border: 1px solid #000; padding: 8px;text-align:right;">${row['Distance']}</td>
                    <td style="border: 1px solid #000; padding: 8px;">${row['Train']}</td>
                    <td style="border: 1px solid #000; padding: 8px; text-align:right;">${row['Ticket Count']}</td>
                    <td style="border: 1px solid #000; padding: 8px; text-align:right;">LKR ${row['Amount Recieved']}</td>
                  </tr>
                `
              )
              .join('')}
            <tr style="border-top: 2px solid #000;">
              <td colspan="5" style="border: 1px solid #000; padding: 8px; font-weight: bold;">Total</td>
              <td style="border: 1px solid #000; padding: 8px; font-weight: bold; text-align:right;">${totalTicketCount}</td>
              <td style="border: 1px solid #000; padding: 8px; font-weight: bold; text-align:right;">LKR ${totalAmountReceived}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  
    // Open a new window and write the printable content
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Printable Revenue Table</title>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
          </style>
        </head>
        <body>
          ${printableHTML}
        </body>
      </html>
    `);
  
    // Close the document after printing
    printWindow.document.close();
  
    // Print automatically
    printWindow.print();
  };
  


  return (
    <div className="form">
      <AdminSidebar />
      <div className="container">
        <Navbar />
        
        <div className='formContainer' style={{display:"flex", flexDirection: "column"}}>

            <div style={{flex:2}}>
            <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom:'20px'
                }}
              >
        <h2 className='title'>Total Revenue Earned</h2>

        <div style={{ display:'flex',gap :'20px',alignItems: 'center', justifyContent: 'center'}}>
                   <InputWithButton
                      placeholder="Search Total Revenue"
                      // value={searchQuery}
                      // onChange={(event) => setSearchQuery(event.target.value)}
                      // // Add a click handler to clear search
                      // onButtonClick={() => setSearchQuery('')}
                    />
                    <div style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Button variant="filled" color="blue" style={{ flex: 0.5, fontSize: "14px"}}  onClick={generatePrintableContent}>
                Print Total Revenue
              </Button></div>
                </div></div>


        <CustomTable headers={headers2} data={aggregatedData}  />


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

    <div className='formContainer' style={{display:"flex", flexDirection: "column"}}>

<div style={{flex:2}}>
<div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom:'20px'
    }}
  >
        <h2 className='title'>Revenue Earned</h2>


        <div style={{ display:'flex',gap :'20px',alignItems: 'center', justifyContent: 'center'}}>
                   <InputWithButton
                      placeholder="Search Revenue"
                      // value={searchQuery}
                      // onChange={(event) => setSearchQuery(event.target.value)}
                      // // Add a click handler to clear search
                      // onButtonClick={() => setSearchQuery('')}
                    />
                    <div style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Button variant="filled" color="blue" style={{ flex: 0.5, fontSize: "14px"}}  onClick={generatePrintableContentRevenues}>
                Print All Revenues
              </Button></div>
                </div></div>
        <CustomTable headers={headers} data={tableData} />


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
  );
}

export default Revenue;

