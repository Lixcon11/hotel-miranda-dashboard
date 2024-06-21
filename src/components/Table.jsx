/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledTable = styled.table`
    background-color: white;
    width: 80%;

    thead {
        font-size: 18px;
        font-weight: 600;
        color: #393939;
    }

    tr {
        border: 3px solid red;
    }

    th, td {
        padding: 7px;
        text-align: center;
    }
`

const Table = ({data, columns}) => {
    return (
        <StyledTable>
            <thead>
                <tr>
                {columns.map((column, i) => (
                    
                        <th key={i}>{column.label}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => 
                <tr key={i}>
                    {columns.map((column, j) => (
                        <td key={j}><NavLink to={`./${row.id}`}>{column.display ? column.display(row) : row[column.property]}</NavLink></td>
                    ))}
                </tr>
                )}
            </tbody>
        </StyledTable>
    )
}

export {Table};