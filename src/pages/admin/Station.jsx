import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { Button, TextInput, Textarea } from "@mantine/core";
import CustomTable from "../../components/table/Table";
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import UpdateStationForm from "./forms/UpdateStation";
import { InputWithButton } from "../../components/SearchInput";
import DeleteStation from "./forms/DeleteStation";

const title = "Stations";
function Station() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStations, setFilteredStations] = useState([]);



  // to fetch stations details to table
  useEffect(() => {
    fetchStations();
  }, []);


  useEffect(() => {
    // Filter stations based on search query
    const filtered = stations.filter(station =>
      station.name && station.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStations(filtered);
  }, [searchQuery, stations]);




  const fetchStations = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/stations");
      setStations(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching stations:", error);
      setLoading(false);
    }
  };
  



  //add station 

  const handleAddStation = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.stationName.value,
      location: event.target.elements.location.value,
      description: event.target.elements.description.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:8800/api/stations",
        formData
      );
      console.log("Station added successfully:", response.data);
      fetchStations(); // Fetch stations again to update the list
    } catch (error) {
      console.error("Error adding station:", error);
    }
  };



  //select station to modify
  const [selectedStation, setSelectedStation] = useState(null);

  
//update station 
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  
  const handleEditTrainClick = (station) => {
    setShowUpdateForm(true);
    setShowDeleteForm(false); // Close the delete form if it's open
    setSelectedStation(station); // Store the selected station data
  };

  const handleStationUpdate = (updatedStation) => {
    // Find the index of the updated station in the array
    const updatedIndex = stations.findIndex(
      (station) => station._id === updatedStation._id
    );

    // Update the station at the specified index
    if (updatedIndex !== -1) {
      const updatedStations = [...stations];
      updatedStations[updatedIndex] = updatedStation;
      setStations(updatedStations);
    }
  };



//delete station

const [showDeleteForm, setShowDeleteForm] = useState(false);
  const handleDeleteTrainClick = (station) => {
    setShowUpdateForm(false);
    setShowDeleteForm(true); // Close the delete form if it's open
    setSelectedStation(station); // Store the selected station data
  };


  //table stuff

  const headers = ["Station Reference", "Station", "Location", "Description"];

  const tableData = stations.map((station) => ({
    "Station Reference": station._id,
    Station: station.name,
    Location: station.location,
    Description: station.description,
    EditButton: (
      <Button
        key={`${station._id}-update`}
        variant="filled"
        color="blue"
        onClick={() => handleEditTrainClick(station)}
      >
        Edit Station
      </Button>
    ),
    DeleteButton: (
      <Button
        key={`${station._id}-delete`}
        variant="filled"
        color="red"
        onClick={() => handleDeleteTrainClick(station)}
      >
        Delete Station
      </Button>
    ),
  }));


  const generatePrintableContent = () => {
    // Create a string containing the HTML for the table
    const printableHTML = `
    <div style="align-items: center; justify-content: center; text-align: center; margin-top:50px;">
    <h3 style="color:rgb(43, 43, 161);">BookMyTrain</h3>
  <h4>Station Details</h4>
</div>

    <div style="padding:20px 50px;">
      <table style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr style="border-bottom: 2px solid #000;">
            <th style="border: 1px solid #000; padding: 8px;">Station Reference</th>
            <th style="border: 1px solid #000; padding: 8px;">Station</th>
            <th style="border: 1px solid #000; padding: 8px;">Location</th>
            <th style="border: 1px solid #000; padding: 8px;">Description</th>
          </tr>
        </thead>
        <tbody>
          ${tableData
            .map(
              (row) => `
                <tr>
                  <td style="border: 1px solid #000; padding: 8px;">${
                    row['Station Reference']
                  }</td>
                  <td style="border: 1px solid #000; padding: 8px;">${row['Station']}</td>
                  <td style="border: 1px solid #000; padding: 8px;">${row['Location']}</td>
                  <td style="border: 1px solid #000; padding: 8px;">${
                    row['Description']
                  }</td>
                </tr>
              `
            )
            .join('')}
        </tbody>
      </table>
    `;
  
    // Open a new window and write the printable content
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Printable Stations Table</title>
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
    <div>
      <div className="form">
        <AdminSidebar />
        <div className="container">
          <Navbar />
          <div className="formContainer">
            <div>
              <h2 className="title">Add Station</h2>
              <form onSubmit={handleAddStation}>
                <TextInput
                  label="Station Name"
                  placeholder="Enter Station Name"
                  withAsterisk
                  name="stationName"
                />
                <TextInput
                  label="Location"
                  placeholder="Enter Location"
                  withAsterisk
                  name="location"
                />
                <Textarea
                  label="Description"
                  placeholder="Enter Description"
                  withAsterisk
                  name="description"
                />
                <div style={{ marginTop: "20px" }}>
                  <Button type="submit" variant="filled" color="blue">
                    Add Station
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="formContainer">
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <h2 className="title" style={{ flex: 3 }}>
                  {title}
                </h2>
                <div style={{ flex: 1 , display:'flex',gap :'20px',alignItems: 'center', justifyContent: 'center'}}>
                   <InputWithButton
                      placeholder="Search Stations"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      // Add a click handler to clear search
                      onButtonClick={() => setSearchQuery('')}
                    />
                    <div style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Button variant="filled" color="blue" style={{ flex: 0.5, fontSize: "14px"}}  onClick={generatePrintableContent}>
                Print All Stations
              </Button></div>
                </div>
              </div>
              {loading ? (
                <div>Loading stations...</div>
              ) : (
                <CustomTable
                  headers={headers}
                  data={tableData}
                  getRowId={(row) => row._id}
                  // buttonComponents={btns}
                />
              )}
              {showUpdateForm && (
                <div className="update-form-overlay">
                  <UpdateStationForm
                    station={selectedStation} // Pass the selected station data as props
                    onUpdate={handleStationUpdate}
                    onClose={() => setShowUpdateForm(false)}
                  />
                </div>
              )}
              {/* Overlay for Delete Form */}
              {showDeleteForm && (
                <div className="update-form-overlay">
                  <DeleteStation
                    onClose={() => setShowDeleteForm(false)}
                    selectedStation={selectedStation}
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

export default Station;