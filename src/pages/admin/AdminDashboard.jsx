import React from 'react'; 
import { createStyles, rem } from '@mantine/core';
import Card from '../../components/Card';
import AdminSidebar from '../../components/sidebar/AdminSidebar';
import Navbar from '../../components/navbar/Navbar';
import { InputWithButton } from '../../components/SearchInput';
import CustomTable from '../../components/table/Table';

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

 

  return (
    <div>
      <div className="form">
        <AdminSidebar />
        <div className="container">
          <Navbar />
          <div className="formContainer">
           
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