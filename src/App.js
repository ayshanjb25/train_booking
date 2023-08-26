import Home from './pages/home/Home'
import  { AuthenticationImage, Login } from './pages/login/Login'
import List from './pages/list/List'
import New from './pages/new/New'
import Single from './pages/single/Single'
import UserProfile from './pages/passenger/UserProfile'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BookingHistory from './pages/tables/BookingHistory'
import BookSeat from './pages/passenger/BookSeat'
import BookingOrder from './pages/passenger/BookingOrder'
import Payment from './pages/passenger/Payment'
import AdminUser from './pages/admin/AdminUser'
import AdminProfile from './pages/admin/AdminProfile'
import Station from './pages/admin/Station'
import PassengerInfo from './pages/admin/Passenger'
import UpdatePassengerForm from './pages/admin/forms/UpdatePassenger'
import DeleteForm from './pages/admin/forms/delete'
import BookTrainForm from './pages/passenger/forms/BookTrain'
import Register from './pages/register/Register'
import PassengerTravelHistory from './pages/admin/PassengerTravelHistory'
import ViewTravelHistory from './pages/admin/forms/ViewTravelDetails'
import ViewTravelHistoryForm from './pages/admin/forms/ViewTravelDetails'
import Train from './pages/admin/Train'
import AddUser from './pages/admin/AddUsers'
import AdminDashboard from './pages/admin/AdminDashboard'


function App() {
  return (
    <div className="App">
     



     <BrowserRouter>
        <Routes>

        
        <Route path="/">
          <Route index element={<BookSeat />} />
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="admin" element={<AdminUser/>}/> */}
          <Route path="admin-profile" element={<AdminProfile/>}/>
          
          <Route path="/login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          
         
          <Route path="users">
            <Route index element={<List />} />
            <Route path="new" element={<New />} />
            <Route path=":userId" element={<Single />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path="new" element={<New />} />
            <Route path=":productId" element={<Single />} />
          </Route>
          <Route path="book" element={<BookSeat />} />
          {/* <Route path="booking-order" element={<BookingOrder />} /> */}
          <Route path="booking-order" element={<Payment />} />
          <Route path="user" >
          <Route index element={<UserProfile />} />
            <Route path="booking-history" element={<BookingHistory />} />
            

          </Route>
          <Route path="booktrain" element={<BookTrainForm/>}/>
          <Route index element={<Home />} />
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
        <Route index element={<AdminProfile />} />
        <Route path="admin-profile" element={<AdminProfile/>}/>
        <Route path="station" element={<Station/>}/>
        <Route path="train" element={<Train/>}/>
          <Route path="passenger" element={<PassengerInfo/>}/>
          <Route path="passengertravelhistory" element={<PassengerTravelHistory/>}/>
          <Route path="users" element={<AddUser/>}/>
          <Route path="admin-dashboard" element={<AdminDashboard/>}/>



        </Route>
        </Routes>
     
     </BrowserRouter>

  
   
 
     




    </div>
  );
}

export default App;
