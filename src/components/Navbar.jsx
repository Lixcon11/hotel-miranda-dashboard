import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom"
import styled from "styled-components"

const StyledSidebar = styled.div`
  height: 100%;
  width: 120px;
  position: fixed;
  z-index: 1;
  top: 120px;
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
}
`

const Navbar = () => {

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
                <NavLink to="/contact">Contact</NavLink><br/>
            </StyledSidebar>
            <Outlet></Outlet>
        </>
    )
}

const StyledNavbar = styled(Navbar)`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
`

export {Navbar}