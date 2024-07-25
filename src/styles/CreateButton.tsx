import styled from "styled-components";

type  CreateButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    $backgroundColor?: string;
}

const CreateButton = styled.button<CreateButtonProps>`
background-color: ${props => props.$backgroundColor ? props.$backgroundColor: "#135846"};
color: white;

`

export { CreateButton }