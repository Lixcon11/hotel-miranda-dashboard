import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "./AuthContext"
import { MiniImageProfile } from "../styles/ImageProfile"

const StyledHeader = styled.header`
width: 100%;
height: 50px;
display: flex;
justify-content: space-evenly;
align-items: center;
position: fixed;
padding-left: 150px;
//left: 280px;
background-color: white;

    h1 {
        font-size: 28px;
        color: #262626;
        font-weight: 600;
        text-transform: capitalize;
    }

    > div {
        display: flex;
        gap: 15px;
        align-items: center;
    }

@media only screen and (min-width: 1000px) {
height: 120px;
padding-left: 310px;
    img {
        width: 60px;
        height: 60px;
    }
}
`
const Space = styled.section`
margin-left: 120px;
padding: 100px 50px 50px;
background-color: var(--grey);
//overflow: hidden;
//width: 100%;

@media only screen and (min-width: 1000px) {
padding-top: 170px;
margin-left: 345px;
}
`

const Page = ({ children, title, textHandler }) => {
    const { authState } = useContext(AuthContext);
    
    return(
        <>
            <StyledHeader>
                <h1>{title}</h1>
                <form onSubmit={textHandler}>
                    <input type="text" name="input"></input>
                </form>
                <div>
                    <div>
                        <p>Hi {authState.name}</p>
                        <p>{authState.email}</p>
                    </div>
                    <MiniImageProfile src={authState.photo}/>
                </div>
            </StyledHeader>
            <Space>
                {children}
            </Space>
        </>
    )
}

export { Page }