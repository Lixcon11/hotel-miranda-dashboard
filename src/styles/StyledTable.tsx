import styled from "styled-components";

const StyledTable = styled.table`
    background-color: white;
    width: 100%;
    margin-top: 25px;
    border-collapse: collapse;

    thead {
        font-size: 18px;
        font-weight: 600;
        color: #393939;
        text-align: left;

        tr {
            border-width: 0px 0px 2px 0px;

            button {
                text-align: center;
                background: inherit;
                border: 0;
                padding: 0px 7px;
                cursor: pointer;
                color: grey;
            }
        }
    }

    td, th {
        padding: 10px 15px;
    }

    tr { 
        border: solid var(--grey);
        border-width: 0px 0px 1px 0px;
    }

    tbody {

        tr:hover {
            box-shadow: 0px 4px 30px #0000001A;
        }
    
        tr:last-child {
        border-bottom: none;
        }
    }
`

export { StyledTable }