import { BrowserRouter, Route, Routes } from  "react-router-dom"
import { Dashboard } from "./modules/dashboard/components/Dashboard"
import { Login } from "./modules/login/Login"
import { EditAny } from "./components/EditAny"
import { Navbar } from "./components/Navbar"
import { AuthProvider } from "./components/AuthProvider"
import { PrivateRoute } from "./components/PrivateRoute"
import { store } from "./store"
import { Provider } from "react-redux"
import { usersPageData } from "./modules/users/functions/usersPageData"
import { TablePage } from "./components/TablePage"
import { DetailsOfAny } from "./components/DetailsOfAny"
import { CreateAny } from "./components/CreateAny"
import { contactsPageData } from "./modules/contacts/functions/contactsPageData"
import { roomsPageData } from "./modules/rooms/functions/roomsPageData"

const usersData = usersPageData;
const contactsData = contactsPageData;
const roomsData = roomsPageData;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute><Navbar/></PrivateRoute>}>
                <Route path="dashboard" element={<Dashboard/>}/>

                <Route path="bookings" element={<TablePage/>}/>
                <Route path="bookings/create" element={<CreateAny/>}/>
                <Route path="bookings/:id" element={<DetailsOfAny/>}/>
                <Route path="bookings/:id/edit" element={<EditAny/>}/>

                <Route path="rooms" element={<TablePage pageData={roomsData}/>}/>
                <Route path="rooms/create" element={<CreateAny pageData={roomsData}/>}/>
                <Route path="rooms/:id" element={<DetailsOfAny pageData={roomsData}/>}/>
                <Route path="rooms/:id/edit" element={<EditAny pageData={roomsData}/>}/>

                <Route path="users" element={<TablePage pageData={usersData}/>}/>
                <Route path="users/create" element={<CreateAny pageData={usersData}/>}/>
                <Route path="users/:id" element={<DetailsOfAny pageData={usersData}/>}/>
                <Route path="users/:id/edit" element={<EditAny pageData={usersData}/>}/>

                <Route path="contacts" element={<TablePage pageData={contactsData}/>}/>
                <Route path="contacts/create" element={<CreateAny pageData={contactsData}/>}/>
                <Route path="contacts/:id" element={<DetailsOfAny pageData={contactsData}/>}/>
                <Route path="contacts/:id/edit" element={<EditAny pageData={contactsData}/>}/>
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