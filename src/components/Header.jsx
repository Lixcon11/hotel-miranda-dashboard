import styled from "styled-components"

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


const Header = ({ children }) => {
    return(
        <>
            <StyledHeader>
                <h1>{children}</h1>
            </StyledHeader>
            <Filler></Filler>
        </>
    )
}

export { Header }