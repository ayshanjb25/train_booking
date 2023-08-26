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
} from "@mantine/core";
import CustomTable from "../../components/table/Table";
import BookTrainForm from "./forms/BookTrain";
import axios from "axios";
import TrackTrain from "./forms/TrackTrain";
import { InputWithButton } from "../../components/SearchInput";

const title = "Book your seat";
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

function UserProfile() {
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
        onClick={() => setShowTrackTrainForm(true)}
      >
        Track Train
      </Button>
    ),
    DeleteButton: (
      <Button
        key={`${trackTrain._id}-delete`}
        variant="filled"
        color="blue"
        onClick={() => setShowBookTrainForm(true)}
      >
        Book Train
      </Button>
    ),
  }));
  const btns = [
    <div style={{ display: "flex", gap: "10px" }}>
      <Button variant="filled" color="gray">
        Track Train
      </Button>
      <Button
        variant="filled"
        color="green"
        onClick={() => setShowBookTrainForm(true)}
      >
        Book Train
      </Button>
    </div>,
  ];
  const handleCancelBookTrain = () => {
    setShowBookTrainForm(false);
  };
  const handleCancelTrackTrain = () => {
    setShowTrackTrainForm(false);
  };

  return (
    <div className="form">
      <PassengerSidebar />
      <div className="container">
        <Navbar />
        <div
          className="formContainer"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="bookingDiv" style={{ flex: 1 }}>
            <div className="content">
              <h2 className="title">{title}</h2>
              <p>You can book both ways</p>
            </div>
          </div>

          <div style={{ flex: 2 }}>
            <form
              component="form"
              maw={400}
              mx="auto"
              onSubmit={form.onSubmit(() => {})}
            >
              <div className="bookDiv" style={{ marginBottom: "20px" }}>
                <Select
                  mt="md"
                  withinPortal
                  data={["React", "Angular", "Svelte", "Vue"]}
                  placeholder="Choose Station"
                  label="From"
                  classNames={classes}
                  style={{ flex: 1 }}
                />

                <Select
                  mt="md"
                  withinPortal
                  data={["React", "Angular", "Svelte", "Vue"]}
                  placeholder="Choose Station"
                  label="To"
                  classNames={classes}
                  style={{ flex: 1 }}
                />

                <DatePickerInput
                  mt="md"
                  popoverProps={{ withinPortal: true }}
                  label="Departure date"
                  placeholder="When will you leave?"
                  classNames={classes}
                  clearable={false}
                  style={{ flex: 1 }}
                />
              </div>

              {/* <TextInput 
                  label="No of Passengers" 
                  placeholder="No of Passengers" 
                  withAsterisk 
                  mt="md"
                  {...form.getInputProps('passengerNo')} 
                  /> */}

              <div className="bookDiv">
                <p style={{ fontSize: "14px", margin: "10px 0 0 10px" }}>
                  No of Passengers
                </p>

                <QtyInput />
              </div>

              <div className="bookDiv">
                <Select
                  mt="md"
                  withinPortal
                  data={["React", "Angular", "Svelte", "Vue"]}
                  placeholder="Choose Station"
                  label="Seating Preference"
                  classNames={classes}
                  style={{ flex: 1 }}
                />

                <Select
                  mt="md"
                  withinPortal
                  data={["React", "Angular", "Svelte", "Vue"]}
                  placeholder="Choose Station"
                  label="To"
                  classNames={classes}
                  style={{ flex: 1 }}
                />
              </div>

              <Group position="right" mt="md">
                <Button type="submit">Search</Button>
                <Button type="submit">Reset</Button>
              </Group>
            </form>
          </div>
        </div>

        <div
          className="formContainer"
          style={{
            border: "none",
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
          {showBookTrainForm && (
            <div className="update-form-overlay">
              <BookTrainForm onClose={handleCancelBookTrain} />
            </div>
          )}

          {showTrackTrainForm && (
            <div className="update-form-overlay">
              <TrackTrain onClose={handleCancelTrackTrain} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
