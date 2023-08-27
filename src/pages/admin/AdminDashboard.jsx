import React, { useEffect, useState } from 'react'; 
import { CardSection, createStyles, rem } from '@mantine/core';
import Card from '../../components/Card';
import AdminSidebar from '../../components/sidebar/AdminSidebar';
import Navbar from '../../components/navbar/Navbar';
import { InputWithButton } from '../../components/SearchInput';
import CustomTable from '../../components/table/Table';
import StatsSection from '../../components/Card';
import { IconCoin, IconUser, IconTicket, IconChartBar } from '@tabler/icons-react';
import axios from 'axios';

const title= 'title';

const useStyles = createStyles((theme) => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `${rem(3)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
    },
  },
}));

export function AdminDashboard({ data }) {
  const { classes, theme } = useStyles();
  const [trains, setTrains] = useState([]);
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);


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
  

  // to fetch stations details to table
  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/trains");
      setTrains(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trains:", error);
      setLoading(false);
    }
  };


  const headers = ["Station", "Location", "Description"];

  const tableData = stations.map((station) => ({
    Station: station.name,
    Location: station.location,
    Description: station.description
    
  }));
  


  const headers2 = ["Train", "Route"];

  const tableData2 = trains.map((train) => ({
            Train: train.name,
            Route:train.route
  
  }));

const icons = {
    user: IconUser,
    discount: IconChartBar,
    ticket: IconTicket,
    coin: IconCoin,
  };
 

  return (
    <div>
      <div className="form">
        <AdminSidebar />
        <div className="container">
          <Navbar />
          <div className="formContainer">
            <h2>Train Management</h2>
            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around',padding:'0px'}}>
            <StatsSection
              title="tICKETS sold"
              icon={icons.ticket}
              value="10000"
              diff="40"
            />
          <StatsSection
              title="Total Passenger"
              icon={icons.user}
              value="1200"
              diff="20"
            />
            <StatsSection
              title="Total Users"
              icon={icons.user}
              value="20000"
              diff="20"
            />
            
            <StatsSection
              title="USAGE iNCREASE"
              icon={icons.discount}
              value="60%"
              diff="60"
            />
            <StatsSection
              title="Total revenue"
              icon={icons.coin}
              value="LKR 200,000"
              diff="123"
            />
            </div>
          </div>
          <div style={{border:'1px solid hsl(0, 10%, 94%)', width:'95.6%', margin:'50px',padding:'50px 0px',display:"flex", flexDirection:'row',gap:'0px'}}>
          <div className="formContainer" style={{ flex:10,width:'35%'}}>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <h2 className="title" style={{ flex: 3 }}>
                  Top Stations
                </h2>
                
              </div>
              
                <CustomTable
                  headers={headers}
                  data={tableData}
                  getRowId={(row) => row._id}
                  // buttonComponents={btns}
                />
             
              
              
            </div>
          </div>

          <div className="formContainer" style={{flex:1, width:'25%'}}>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <h2 className="title" style={{ flex: 3 }}>
                Top Trains
                </h2>
                
              </div>
              
                <CustomTable
                  headers={headers2}
                  data={tableData2}
                  getRowId={(row) => row._id}
                />
             
              
              
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;