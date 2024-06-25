/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
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

const Table = ({data, columns, loading}) => {
    return (
        <>
            {!loading ?
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
            :
            <p>Loading</p>}
        </>
    )
}

export {Table};