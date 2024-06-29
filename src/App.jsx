import { BrowserRouter, Route, Routes } from  "react-router-dom"
import { Bookings } from "./modules/bookings/components/Bookings"
import { Dashboard } from "./modules/dashboard/components/Dashboard"
import { Rooms } from "./modules/rooms/components/Rooms"
import { Contact } from "./modules/contact/components/Contact"
import { Login } from "./modules/login/Login"
import { EditAny } from "./components/EditAny"
import { CreateBooking } from "./modules/bookings/components/CreateBooking"
import { Navbar } from "./components/Navbar"
import { AuthProvider } from "./components/AuthProvider"
import { PrivateRoute } from "./components/PrivateRoute"
import { store } from "./store"
import { Provider } from "react-redux"
import { userPageData } from "./modules/users/functions/userPageData"
import { TablePage } from "./components/TablePage"
import { DetailsOfAny } from "./components/DetailsOfAny"
import { CreateAny } from "./components/CreateAny"

const userData = userPageData;

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
                <Route path="bookings/:id" element={<DetailsOfAny/>}/>
                <Route path="bookings/:id/edit" element={<EditAny/>}/>

                <Route path="rooms" element={<Rooms/>}/>
                <Route path="rooms/create" element={<CreateAny/>}/>
                <Route path="rooms/:id" element={<DetailsOfAny/>}/>
                <Route path="rooms/:id/edit" element={<EditAny/>}/>

                <Route path="users" element={<TablePage pageData={userData}/>}/>
                <Route path="users/create" element={<CreateAny pageData={userData}/>}/>
                <Route path="users/:id" element={<DetailsOfAny pageData={userData}/>}/>
                <Route path="users/:id/edit" element={<EditAny pageData={userData}/>}/>

                <Route path="contact" element={<Contact/>}/>
                <Route path="contact/create" element={<CreateAny/>}/>
                <Route path="contact/:id" element={<DetailsOfAny/>}/>
                <Route path="contact/:id/edit" element={<EditAny/>}/>
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