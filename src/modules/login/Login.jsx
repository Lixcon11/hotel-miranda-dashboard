import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../components/AuthContext"
import { usersPageData } from "../users/functions/usersPageData"

const Login = () => {
    const { authDispatch, authState } = useContext(AuthContext);
    const { data } = usersPageData();
    const submitHandler = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;
        const user = data.filter(user => user.name === name && user.password === password)[0];
        if(user) {
            authDispatch({type: "logIn", payload: {name: user.name, photo: user.photo, email: user.email, id: user.id}})
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