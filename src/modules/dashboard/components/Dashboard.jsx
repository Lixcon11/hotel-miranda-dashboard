import { NavLink } from "react-router-dom"

const Dashboard = ({ setAuth }) => {
    return (
        <>
            <h1>Dashboard</h1>
            <NavLink to="/bookings">Bookings</NavLink><br/>
            <NavLink to="/rooms">Rooms</NavLink><br/>
            <NavLink to="/users">Users</NavLink><br/>
            <NavLink to="/contact">Contact</NavLink><br/>
            <button onClick={() => setAuth(false)}>Log Out</button>
        </>
    )
}

export {Dashboard}