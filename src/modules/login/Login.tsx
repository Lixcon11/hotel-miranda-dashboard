import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../components/AuthContext"
import styled from "styled-components";

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
            <LoginContainer>
                <LoginForm onSubmit={submitHandler}>
                    <Title>Login</Title>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" type="email" placeholder="Enter your email"></Input>
                    <Label htmlFor="password">Password</Label>
                    <Input name="password" type="password" placeholder="Enter your password"></Input>
                    <Button type="submit">Login</Button>
                    <TestCredentials>
                        <p>Test Email: <span>test@test.com</span></p>
                        <p>Test Password: <span>test</span></p>
                    </TestCredentials>
                </LoginForm>
            </LoginContainer>
            </>
        )
    }
    else {
        return <Navigate to="/"/>
    }
}


const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f6f7fb;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
`;

const Title = styled.h1`
    margin-bottom: 1.5rem;
    font-size: 24px;
    color: #333;
    text-align: center;
`;

const Label = styled.label`
    font-size: 14px;
    color: #555;
    margin-bottom: 0.5rem;
`;

const Input = styled.input`
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    color: #333;

    &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
    }
`;

const Button = styled.button`
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

const TestCredentials = styled.div`
    margin-top: 1.5rem;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    text-align: center;
    line-height: 1.5;

    p {
        margin: 0.5rem 0;
    }

    span {
        font-weight: bold;
        color: #007bff;
    }
`;


export {Login}