
import  { Login } from './pages/login/Login'
import UserProfile from './pages/passenger/UserProfile'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BookingHistory from './pages/tables/BookingHistory'
import BookSeat from './pages/passenger/BookSeat'
import Payment from './pages/passenger/Payment'
import AdminProfile from './pages/admin/AdminProfile'
import Station from './pages/admin/Station'
import PassengerInfo from './pages/admin/Passenger'
import BookTrainForm from './pages/passenger/forms/BookTrain'
import Register from './pages/register/Register'
import PassengerTravelHistory from './pages/admin/PassengerTravelHistory'
import Train from './pages/admin/Train'
import AddUser from './pages/admin/AddUsers'
import AdminDashboard from './pages/admin/AdminDashboard'
import PassengerDashboard from './pages/admin/PassengerDashboard'
import Discounts from './pages/admin/Discounts'
import Loyalty from './pages/admin/Loyalty'
import TravelHistory from './pages/admin/TravelHistory'
import Revenue from './pages/admin/Revenue';
import TrackTrain from './pages/passenger/forms/TrackTrain';
import TrackTrainTable from './pages/admin/TrackTrainTable';


function App() {
  return (
    <div className="App">
     



     <BrowserRouter>
        <Routes>

        
        <Route path="/">
          <Route index element={<PassengerDashboard />} />
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="admin" element={<AdminUser/>}/> */}
          <Route path="admin-profile" element={<AdminProfile/>}/>
          <Route path="travelhistory" element={<TravelHistory/>}/>
          
          <Route path="/login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          
         
          
          <Route path="book" element={<BookSeat />} />
          {/* <Route path="booking-order" element={<BookingOrder />} /> */}
          <Route path="booking-order" element={<Payment />} />
          <Route path="user" >
          <Route index element={<UserProfile />} />
            <Route path="booking-history" element={<BookingHistory />} />
            

          </Route>
          <Route path="bookseat" element={<BookSeat/>}/>
          <Route path="booktrain" element={<BookTrainForm/>}/>
          
        {/* <Route
          path="dashboard"
          element={<Dashboard />}
          loader={({ request }) =>
            fetch("/api/dashboard.json", {
              signal: request.signal,
            })
          }
        /> */}
        </Route>
        <Route path="/admin">
        <Route index element={<AdminDashboard />} />
        <Route path="admin-profile" element={<AdminProfile/>}/>
        <Route path="station" element={<Station/>}/>
        <Route path="train" element={<Train/>}/>
          <Route path="passenger" element={<PassengerInfo/>}/>
          <Route path="passengertravelhistory" element={<PassengerTravelHistory/>}/>
          <Route path="users" element={<AddUser/>}/>
          <Route path="admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="discounts" element={<Discounts/>}/>
          <Route path="loyalty" element={<Loyalty/>}/>
          <Route path="revenue" element={<Revenue/>}/>
          <Route path="trackTrain" element={<TrackTrainTable/>}/>



        </Route>
        </Routes>
     
     </BrowserRouter>

  
   
 
     




    </div>
  );
}

export default App;
