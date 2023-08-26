import React from 'react'; 
import { CardSection, createStyles, rem } from '@mantine/core';
import Card from '../../components/Card';
import AdminSidebar from '../../components/sidebar/AdminSidebar';
import Navbar from '../../components/navbar/Navbar';
import { InputWithButton } from '../../components/SearchInput';
import CustomTable from '../../components/table/Table';
import StatsSection from '../../components/Card';
import { IconCoin, IconUser, IconTicket, IconChartBar } from '@tabler/icons-react';

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


  const headers = ['id','name'];
  const tableData = [{'id':'123','name':'aisha'},{'id':'123','name':'aisha'},{'id':'123','name':'aisha'},{'id':'123','name':'aisha'}];
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

export default AdminDashboard;