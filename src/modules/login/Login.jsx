import { Navigate } from "react-router-dom"

const Login = ({ auth, setAuth, AUTH_KEY }) => {

    const submitHandler = e => {
        e.preventDefault();
        if(e.target.name.value === AUTH_KEY.name && e.target.password.value === AUTH_KEY.password) {
            setAuth(AUTH_KEY);
        }
    }

    if(!auth){
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