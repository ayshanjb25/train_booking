import React, { useEffect, useState } from "react";
import { Button, CardSection, createStyles, rem } from '@mantine/core';
import Navbar from '../../components/navbar/Navbar';
import { IconCoin, IconChartBar, IconTicket,  IconTrain, IconClock } from '@tabler/icons-react';
import CustomTable from '../../components/table/Table';
import StatsSection from '../../components/Card';
import PassengerSidebar from '../../components/sidebar/PassengerSidebar';
import { PromotionCard } from '../../components/PromotionCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

const title= 'Travel History';

const useStyles = createStyles((theme) => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `${rem(3)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
    },
  },
}));



export function PassengerDashboard({ data }) {
  const { classes, theme } = useStyles();

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

  const headers = [ "Date", "From Location","To Location","Distance","Train", "Ticket Count","Amount Paid","Points Earned"];// const data2 = [

  const tableData = travels.map((travel) => ({
    
    "Date":travel.date,
    "From Location":travel.fromLocation,
    "To Location": travel.toLocation,
    "Distance": travel.distance,
    "Train": travel.train,
    "Ticket Count": travel.ticketCount,
    "Amount Paid":travel.amountPaid,
    "Points Earned":travel.pointsEarned
  }));
  const icons = {
    time: IconClock,
    km: IconTrain,
    ticket: IconTicket,
    coin: IconCoin,
    discount: IconChartBar,
  };

  return (
    <div>
      <div className="form">
        <PassengerSidebar />
        <div className="container">
          <Navbar />
          <div className="formContainer">
            <h2>Summary</h2>
            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around',padding:'0px'}}>
            <StatsSection
              title="tICKETS bought"
              icon={icons.ticket}
              value="6"
              diff="40"
            />
          <StatsSection
              title="Total Travel hours"
              icon={icons.time}
              value=" 2.5 hrs"
              diff="20"
            />
            <StatsSection
              title="Total Travel KM"
              icon={icons.km}
              value="20 km"
              diff="20"
            />
            
            <StatsSection
              title="USAGE iNCREASE"
              icon={icons.discount}
              value="60%"
              diff="60"
            />
            {/* <StatsSection
              title="Total revenue"
              icon="fsdfsg"
              value="LKR 200,000"
              diff="123"
            /> */}
            </div>
          </div>

          <div className="formContainer">
            
            <div style={{display:'flex',flexDirection:'row', justifyContent:'center',gap:'100px',padding:'10px'}}>
             <div display={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'center'}}> <div style={{display:'flex',flexDirection:'column',padding:'0px'}}>
            <p style={{color:'rgb(43, 43, 161)', fontSize:'40px'}}>Book your Seat</p>
            <p style={{color:'rgb(43, 43, 161)', fontSize:'25px'}}>You can book both ways</p></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button size={50} style={{backgroundColor:'rgb(43, 43, 161)', padding:'20px'}}> <Link to="/bookseat" style={{textDecoration:'none', color:'white'}}>Book Seat</Link> </Button>
    </div></div>
            
          </div>
          <div className="formContainer">
            <h2>Promotions</h2>
            <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around',gap:'30px',padding:'0px'}}>
            <PromotionCard/>
            <PromotionCard/>
            <PromotionCard/>
            <PromotionCard/>
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
                
              </div>
              
                <CustomTable
                  headers={headers}
                  data={tableData}
                  getRowId={(row) => row._id}
                  // buttonComponents={btns}
                />
             
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassengerDashboard;