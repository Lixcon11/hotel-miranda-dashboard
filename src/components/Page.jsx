import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "./AuthContext"

const StyledHeader = styled.header`
width: 100%;
height: 50px;
display: flex;
justify-content: space-evenly;
align-items: center;
position: fixed;
background-color: white;

    h1 {
        font-size: 28px;
        color: #262626;
        font-weight: 600;
    }

    > div {
        display: flex;
        gap: 15px;
        align-items: center;

        img {
            width: 40px;
            height: 40px;
        }
    }

@media only screen and (min-width: 1000px) {
height: 120px;

    img {
        width: 60px;
        height: 60px;
    }
}
`
const Filler = styled.div`
width: 100%;
height: 50px;

@media only screen and (min-width: 1000px) {
height: 120px;
}
`
const Space = styled.section`
margin-left: 120px;
padding: 50px;
background-color: var(--grey);
//overflow: hidden;
//width: 100%;

@media only screen and (min-width: 1000px) {
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
                    <img src={authState.photo}></img>
                </div>
            </StyledHeader>
            <Filler></Filler>
            <Space>
                {children}
            </Space>
        </>
    )
}

export { Page }