import styled from "styled-components"

const Space = styled.section`
margin-left: 120px;
padding: 50px;
background-color: var(--grey);
width: 100%;

@media only screen and (min-width: 1000px) {
margin-left: 345px;
}
`

const Display = ({ children }) => {

    return (
        <>
            <Space>
                {children}
            </Space>
        </>
    )
}

export { Display }