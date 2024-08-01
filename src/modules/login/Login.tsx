import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../components/AuthContext"
//import { useSelector } from "react-redux"
import { usersPageData } from "../users/functions/usersPageData"
import React from "react"
//import { RootState, UserState } from "../../types"
import "dotenv/config";

const Login = () => {
    const { authState, authDispatch } = useContext(AuthContext);

    usersPageData();
    //const { data } = useSelector((state: RootState) => state.users)

    const submitHandler = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                //const token = data.token;
                authDispatch({type: "logIn", payload: {...data, isLoggedIn: true}})
                /*
                const user = data.filter((user: UserState) => user.email === email && user.password === password)[0];
                if(user) {
                    authDispatch({type: "logIn", payload: {name: user.name, photo: user.photo, email: user.email, _id: user._id, isLoggedIn: true, token: token}})
                }
                */
            } else {
                const errorData = await response.json();
                console.log(errorData)
            }
        }
        catch(e) {
            console.log(e)
        }
        /*
        const user = data.filter(user => user.email === email && user.password === password)[0];
        if(user) {
            authDispatch({type: "logIn", payload: {name: user.name, photo: user.photo, email: user.email, _id: user._id, isLoggedIn: true}})
        }
        */
    }

    if(!authState.isLoggedIn){
        return (
            <>
                <h1>Login</h1>
                <form onSubmit={submitHandler}>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" placeholder="test"></input>
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