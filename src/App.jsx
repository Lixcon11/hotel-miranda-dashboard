import { BrowserRouter, Route, Routes } from  "react-router-dom"
import { Bookings } from "./modules/bookings/Bookings"
import { Dashboard } from "./modules/dashboard/Dashboard"
import { Rooms } from "./modules/rooms/Rooms"
import { Users } from "./modules/users/Users"
import { Contact } from "./modules/contact/Contact"
import { Login } from "./modules/login/Login"
import { UserDetails } from "./modules/users/UserDetails"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="bookings" element={<Bookings/>}/>
          <Route path="rooms" element={<Rooms/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="users/1" element={<UserDetails/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export { App }
