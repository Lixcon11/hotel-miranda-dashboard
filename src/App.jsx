import { BrowserRouter, Route, Routes } from  "react-router-dom"
import { Bookings } from "./modules/bookings/components/Bookings"
import { Dashboard } from "./modules/dashboard/components/Dashboard"
import { Rooms } from "./modules/rooms/components/Rooms"
import { Users } from "./modules/users/components/Users"
import { Contact } from "./modules/contact/components/Contact"
import { Login } from "./modules/login/Login"
import { UserDetails } from "./modules/users/components/UserDetails"
import { EditAny } from "./components/EditAny"
import { CreateUser } from "./modules/users/components/CreateUser"
import { CreateBooking } from "./modules/bookings/components/CreateBooking"
import { Navbar } from "./components/Navbar"
import { AuthProvider } from "./components/AuthProvider"
import { PrivateRoute } from "./components/PrivateRoute"
import { store } from "./store"
import { Provider } from "react-redux"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute><Navbar/></PrivateRoute>}>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="bookings" element={<Bookings/>}/>
                <Route path="bookings/create" element={<CreateBooking/>}/>
                <Route path="bookings/:bookingId" element={<UserDetails/>}/>
                <Route path="bookings/:bookingId/edit" element={<EditAny/>}/>

                <Route path="rooms" element={<Rooms/>}/>
                <Route path="rooms/create" element={<CreateUser/>}/>
                <Route path="rooms/:roomId" element={<UserDetails/>}/>
                <Route path="rooms/:roomId/edit" element={<EditAny/>}/>

                <Route path="users" element={<Users/>}/>
                <Route path="users/create" element={<CreateUser/>}/>
                <Route path="users/:userId" element={<UserDetails/>}/>
                <Route path="users/:userId/edit" element={<EditAny/>}/>

                <Route path="contact" element={<Contact/>}/>
                <Route path="contact/create" element={<CreateUser/>}/>
                <Route path="contact/:contactId" element={<UserDetails/>}/>
                <Route path="contact/:contactId/edit" element={<EditAny/>}/>
              </Route>

              <Route path="/login" element={<Login/>}/>
            </Routes>
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export { App }