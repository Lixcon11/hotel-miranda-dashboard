/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Table = ({data, columns}) => {
    return (
        <table>
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
        </table>
    )
}

export {Table};