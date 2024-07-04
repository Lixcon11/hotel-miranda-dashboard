import styled from "styled-components";

const CreateButton = styled.button`
background-color: ${props => props.$backgroundColor ? props.$backgroundColor: "#135846"};
color: white;

`

export { CreateButton }