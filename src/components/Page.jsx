import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "./AuthProvider"

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

        img {
            width: 60px;
            height: 60px;
        }
    }

@media only screen and (min-width: 1000px) {
height: 120px;
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
//width: 100%;

    > div {
        display: flex;
        justify-content: space-between;
    }

@media only screen and (min-width: 1000px) {
margin-left: 345px;
}
`


const Page = ({ children, title }) => {
    const { authState } = useContext(AuthContext);
    return(
        <>
            <StyledHeader>
                <h1>{title}</h1>
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