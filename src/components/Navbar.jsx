import { useContext } from "react";
import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from "./AuthContext"

const StyledSidebar = styled.nav`
  height: 100%;
  width: 120px;
  position: fixed;
  z-index: 1;
  top: 50px;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  padding-top: 20px;
  
    & a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 18px;
        color: var(--green);
        display: block;
    }

@media only screen and (min-width: 1000px) {
    width: 345px;
    top: 120px;
}
`

const Navbar = () => {
    const { authDispatch } = useContext(AuthContext);

    const buttonHandler = () => {
        authDispatch({type: "logOut"})
    }

    if(useLocation().pathname === "/") {
        return <Navigate to="/dashboard"/>
    }
    
    return (
        <>
            <StyledSidebar>
                <NavLink to="/dashboard">Dashboard</NavLink><br/>
                <NavLink to="/bookings">Bookings</NavLink><br/>
                <NavLink to="/rooms">Rooms</NavLink><br/>
                <NavLink to="/users">Users</NavLink><br/>
                <NavLink to="/contacts">Contacts</NavLink><br/>
                <button onClick={buttonHandler}>Logout</button>
            </StyledSidebar>
            <Outlet></Outlet>
        </>
    )
}

export {Navbar}