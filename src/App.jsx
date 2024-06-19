import { BrowserRouter, Route, Routes, useNavigate } from  "react-router-dom"
import { Bookings } from "./modules/bookings/Bookings"
import { Dashboard } from "./modules/dashboard/components/Dashboard"
import { Rooms } from "./modules/rooms/Rooms"
import { Users } from "./modules/users/components/Users"
import { Contact } from "./modules/contact/Contact"
import { Login } from "./modules/login/Login"
import { UserDetails } from "./modules/users/components/UserDetails"
import { EditAny } from "./modules/components/EditAny"
import { CreateUser } from "./modules/users/components/CreateUser"
import { useEffect, useState } from "react"

const AUTH_KEY = {name: "test", password: "test"}

const App = () => {
  const [auth, setAuth] = useState(localStorage.getItem("AUTH_KEY") !==null)

  useEffect(() => {
    if(auth) {
      localStorage.setItem("AUTH_KEY", AUTH_KEY);
    }
    else {
      localStorage.removeItem("AUTH_KEY")
    }
  }, [auth])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute auth={auth}><Dashboard/></PrivateRoute>}/>
          <Route path="bookings" element={<PrivateRoute auth={auth}><Bookings/></PrivateRoute>}/>
          <Route path="bookings/create" element={<PrivateRoute auth={auth}><CreateBooking/></PrivateRoute>}/>
          <Route path="bookings/:bookingId" element={<PrivateRoute auth={auth}><BookingDetails/></PrivateRoute>}/>
          <Route path="bookings/:bookingId/edit" element={<PrivateRoute auth={auth}><EditAny/></PrivateRoute>}/>
          <Route path="rooms" element={<PrivateRoute auth={auth}><Rooms/></PrivateRoute>}/>
          <Route path="rooms/create" element={<PrivateRoute auth={auth}><CreateRoom/></PrivateRoute>}/>
          <Route path="rooms/:roomId" element={<PrivateRoute auth={auth}><RoomDeatils/></PrivateRoute>}/>
          <Route path="rooms/:roomId/edit" element={<PrivateRoute auth={auth}><EditAny/></PrivateRoute>}/>
          <Route path="users" element={<PrivateRoute auth={auth}><Users/></PrivateRoute>}/>
          <Route path="users/create" element={<PrivateRoute auth={auth}><CreateUser/></PrivateRoute>}/>
          <Route path="users/:userId" element={<PrivateRoute auth={auth}><UserDetails/></PrivateRoute>}/>
          <Route path="users/:userId/edit" element={<PrivateRoute auth={auth}><EditAny/></PrivateRoute>}/>
          <Route path="contact" element={<PrivateRoute auth={auth}><Contact/></PrivateRoute>}/>
          <Route path="contact/create" element={<PrivateRoute auth={auth}><CreateContact/></PrivateRoute>}/>
          <Route path="contact/:contactId" element={<PrivateRoute auth={auth}><ContactDetails/></PrivateRoute>}/>
          <Route path="contact/:contactId/edit" element={<PrivateRoute auth={auth}><EditAny/></PrivateRoute>}/>
          <Route path="/login" element={<Login auth={auth} setAuth={setAuth} AUTH_KEY={AUTH_KEY} />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

const PrivateRoute =({children, auth}) => {
  const navigate = useNavigate();
  if(!auth) {
    console.log("asdasd")
    navigate("/login")
  }
  else {
    return children;
  }
}

export { App }
