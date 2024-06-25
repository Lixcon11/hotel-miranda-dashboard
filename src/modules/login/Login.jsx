import { useContext } from "react"
import { Navigate } from "react-router-dom"
import UserData from "../users/data/usersData.json"
import { AuthContext } from "../../components/AuthProvider"

const Login = () => {
    const { authDispatch, authState } = useContext(AuthContext);
    
    const submitHandler = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;
        const user = UserData.filter(user => user.name === name && user.password === password)[0];
        if(user) {
            authDispatch({type: "logIn", payload: {name: user.name, photo: user.photo, email: user.email}})
        }
    }

    if(!authState.isLoggedIn){
        return (
            <>
                <h1>Login</h1>
                <form onSubmit={submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" ></input>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="text"></input>
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