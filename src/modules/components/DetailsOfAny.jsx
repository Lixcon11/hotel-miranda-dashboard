/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

const DeatilsOfAny = ({user}) => {
    return (
        <>
            <p>Name: {user.name}</p>
            <button><NavLink to="./edit">Edit</NavLink></button>
            <button>Delete</button>
        </>
    )
}

export {DeatilsOfAny}