import React, { useState, useEffect } from "react";
import PassengerSidebar from "../../components/sidebar/PassengerSidebar";
import QtyInput from "../../components/QtyInput";
import Navbar from "../../components/navbar/Navbar";
import "../forms/user.scss";
import { DatePickerInput } from "@mantine/dates";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import {
  createStyles,
  rem,
  Select,
  Button,
  Group,
  TextInput,
  Textarea,
} from "@mantine/core";
import CustomTable from "../../components/table/Table";
import axios from "axios";
import { InputWithButton } from "../../components/SearchInput";
import AdminSidebar from "../../components/sidebar/AdminSidebar";
import TrackTrain from "../passenger/forms/TrackTrain";

const title = "Train Tracking";
const title2 = "Available Trains";
const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));

function TrackTrainTable() {
  const { classes } = useStyles();
  const [trackTrains, setTrackTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrackTrains();
  }, []);

  const fetchTrackTrains = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/api/track-trains"
      );
      setTrackTrains(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching stations:", error);
      setLoading(false);
    }
  };


  const [selectedTrackTrainFromStation, setSelectedTrackTrainFromStation] = useState('');
  const [selectedTrackTrainToStation, setSelectedTrackTrainToStation] = useState('');

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
  const [showBookTrainForm, setShowBookTrainForm] = useState(false);
  const [showTrackTrainForm, setShowTrackTrainForm] = useState(false);

  const headers = [
    "Train Reference",
    "Train",
    "Available Seats",
    "From Station",
    "To Station",
    "Date",
    "Start Time",
    "Reach Time",
  ];

  const currentDate = new Date();

  const tableData = trackTrains.map((trackTrain) => ({
    "Train Reference": trackTrain.train,
    Train: trackTrain.train ? trackTrain.train.name : "no trains",
    "Available Seats": trackTrain.train.capacity,
    "From Station": trackTrain.startLocation,
    "To Station": trackTrain.stopLocation,
    Date: currentDate.toDateString(),
    "Start Time": trackTrain.arrivalTime,
    "Reach Time": trackTrain.departureTime,
    EditButton: (
      <Button
      key={`${trackTrain._id}-update`}
      variant="filled"
      color="blue"
      onClick={() => {
        setSelectedTrackTrainFromStation(trackTrain.startLocation);
        setSelectedTrackTrainToStation(trackTrain.stopLocation);
        setShowTrackTrainForm(true);
      }}
    >
      Track Train
    </Button>
    ), 
  }));
  
  
  const handleCancelTrackTrain = () => {
    setShowTrackTrainForm(false);
  };

  return (
    <div className="form">
      <AdminSidebar />
      <div className="container">
        <Navbar />
        <div className="formContainer">
          <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
            {/* <div style={{flex:2}} className="imageWrapper">
                <img src="https://www.news.lk/media/k2/items/cache/9ae1b773f33191448481aaddfbbcbf85_XL.jpg" alt="" />
              </div> */}
            <div style={{ flex: 2 }}>
              <h2 className="title">{title}</h2>
              <div className={classes.wrapper}>
                <form>
                  <div
                    style={{ display: "flex", gap: "50px", marginTop: "10px" }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          marginTop:'15px'
                        }}
                      >
                        <Select
                          label="Train"
                          name="train"
                          placeholder="Select a Train"
                          data={[
                            { value: "Admin", label: "Admin" },
                            { value: "Passenger", label: "Passenger" },
                          ]}
                          size="md"
                        />
                        <Select
                          label="From Station"
                          name="train"
                          placeholder="Select a Train"
                          data={[
                            { value: "Admin", label: "Admin" },
                            { value: "Passenger", label: "Passenger" },
                          ]}
                          size="md"
                        />
                        
                        <TextInput
                          label="Start Time"
                          name="firstname"
                          placeholder="Enter your First name"
                          size="md"
                        />
                        
                        
                       
                      </div>
                    </div>

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          marginTop:'22px'
                        }}
                      >
                        <DatePickerInput
                  popoverProps={{ withinPortal: true }}
                  label="Departure date"
                  placeholder="Departure date"
                  clearable={false}
                  style={{ flex: 1 }}
                />
                        <Select
                          label="To Station"
                          name="train"
                          placeholder="Select a Train"
                          data={[
                            { value: "Admin", label: "Admin" },
                            { value: "Passenger", label: "Passenger" },
                          ]}
                          size="md"
                        />
                        <TextInput
                          label="Reach Time"
                          name="lastname"
                          placeholder="Enter your Last name"
                          size="md"
                        />
                       
                      </div>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    fullWidth
                    mt="xl"
                    size="md"
                    style={{ width: "400px" }}
                  >
                    Create Train Tracking
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="formContainer"
          style={{
            padding: "20px 10px 0px 10px",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h2 className="title" style={{ flex: 3 }}>
              {title2}
            </h2>
            <div style={{ flex: 1 }}>
              <InputWithButton placeholder="Search Trains" />
            </div>
          </div>
          <CustomTable headers={headers} data={tableData} />
          

          {showTrackTrainForm && (
            <div className="update-form-overlay">
              <TrackTrain onClose={handleCancelTrackTrain} fromStation={selectedTrackTrainFromStation} // Pass the 'From Station' value
      toStation={selectedTrackTrainToStation}   />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrackTrainTable;
