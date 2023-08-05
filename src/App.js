import Home from './pages/home/Home'
import Login, { AuthenticationImage } from './pages/login/Login'
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

function App() {
  return (
    <div className="App">
     



     <BrowserRouter>
        <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="login" element={<Login />} /> */}
          {/* <Route path="admin" element={<AdminUser/>}/> */}
          <Route path="admin-profile" element={<AdminProfile/>}/>
          <Route path="station" element={<Station/>}/>
          <Route path="passengerInfo" element={<PassengerInfo/>}/>
          <Route path="login" element={<AuthenticationImage/>}/>
          
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
        </Routes>
     
     </BrowserRouter>

  
   
 
     




    </div>
  );
}

export default App;
