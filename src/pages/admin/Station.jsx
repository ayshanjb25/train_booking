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



  // to fetch stations details to table
  useEffect(() => {
    fetchStations();
  }, []);

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
                <div style={{ flex: 1 }}>
                  <InputWithButton placeholder="Search Stations" />
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
