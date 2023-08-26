import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from 'axios'; 
import { Button, TextInput, Textarea } from "@mantine/core";
import CustomTable from "../../components/table/Table";
import AdminSidebar from "../../components/sidebar/AdminSidebar";

function Station() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/stations');
      setStations(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching stations:', error);
      setLoading(false);
    }
  };
  // const btns = stations.map((station, index) => [
  //   <Button key={`${station._id}-update`} variant="filled" color="blue">Edit Station</Button>,
  //   <Button key={`${station._id}-delete`} variant="filled" color="red">Delete Station</Button>,
  // ]);

  const handleAddStation = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.elements.stationName.value,
      location: event.target.elements.location.value,
      description: event.target.elements.description.value
    };

    try {
      const response = await axios.post('http://localhost:8800/api/stations', formData);
      console.log('Station added successfully:', response.data);
      fetchStations(); // Fetch stations again to update the list
    } catch (error) {
      console.error('Error adding station:', error);
    }
  };

  const headers = ['Station Reference', 'Station', 'Location', 'Description'];
  
  const tableData = stations.map((station) => ({
    'Station Reference': station._id,
    Station: station.name,
    Location: station.location,
    Description: station.description,
    EditButton: (
      <Button key={`${station._id}-update`} variant="filled" color="blue">
        Edit Station
      </Button>
    ),
    DeleteButton: (
      <Button key={`${station._id}-delete`} variant="filled" color="red">
        Delete Station
      </Button>
    ),
  }));

  return (
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
            <h2 className="title">Stations</h2>
            {loading ? (
              <div>Loading stations...</div>
            ) : (
              <CustomTable
                headers={headers}
                data={tableData}
                getRowId={row => row._id}
                // buttonComponents={btns}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Station;







