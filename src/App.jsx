import { BrowserRouter, Route, Routes } from  "react-router-dom"
import { Bookings } from "./modules/bookings/Bookings"
import { Dashboard } from "./modules/dashboard/components/Dashboard"
import { Rooms } from "./modules/rooms/Rooms"
import { Users } from "./modules/users/components/Users"
import { Contact } from "./modules/contact/Contact"
import { Login } from "./modules/login/Login"
import { UserDetails } from "./modules/users/components/UserDetails"
import { EditAny } from "./modules/components/EditAny"
import { CreateAny } from "./modules/components/CreateAny"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="bookings" element={<Bookings/>}/>
          <Route path="rooms" element={<Rooms/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="users/create" element={<CreateAny/>}/>
          <Route path="users/:userId" element={<UserDetails/>}/>
          <Route path="users/:userId/edit" element={<EditAny/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export { App }
