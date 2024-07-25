import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../components/AuthContext"
import { useSelector } from "react-redux"
import { usersPageData } from "../users/functions/usersPageData"
import React from "react"
import { RootState } from "../../types"

const Login = () => {
    const { authState, authDispatch } = useContext(AuthContext);

    usersPageData();
    const { data } = useSelector((state: RootState) => state.users)

    const submitHandler = (e: any) => {
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;
        const user = data.filter(user => user.name === name && user.password === password)[0];
        if(user) {
            authDispatch({type: "logIn", payload: {name: user.name, photo: user.photo, email: user.email, id: user.id, isLoggedIn: true}})
        }
    }

    if(!authState.isLoggedIn){
        return (
            <>
                <h1>Login</h1>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" placeholder="test"></input>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="text" placeholder="test"></input>
                    <input type="submit"></input>
                </form>
            </>
        )
    }
    else {
        return <Navigate to="/"/>
    }
}

export {Login}