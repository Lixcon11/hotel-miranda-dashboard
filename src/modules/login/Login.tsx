import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../components/AuthContext"

const Login = () => {
    const { authState, authDispatch } = useContext(AuthContext);

    const submitHandler = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                authDispatch({type: "logIn", payload: {...data, isLoggedIn: true}})
            } else {
                const errorData = await response.json();
                console.log(errorData)
            }
        }
        catch(e) {
            console.log(e)
        }
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