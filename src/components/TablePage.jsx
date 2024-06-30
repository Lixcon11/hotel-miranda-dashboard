import { Page } from "./Page";
import { UpperNav } from "../styles/UpperNav";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { StyledTable } from "../styles/StyledTable";


const TablePage = ({ pageData }) => {
    const { sortDefault, filterDefault, searchFilter } = pageData().tableVariables;
    const [sort, setSort] = useState (sortDefault);
    const [filter, setFilter] = useState ({type: filterDefault, word: "", searchOn: searchFilter});
    const { title, columns, filtersList, crud, data, loading} = pageData().generalData(sort, filter);
    const dispatch = useDispatch();

    useEffect(() => {
        setSort(sortDefault);
        setFilter({type: filterDefault, word: "", searchOn: searchFilter})
    }, [sortDefault, searchFilter])

    const deleteHandler = id => {
        dispatch(crud.toDelete(id))
    }
    
    const textHandler = e => {
        e.preventDefault()
        const { value } = e.target.input;
        setFilter(filterParams => ({...filterParams, word: value}))
    }

    return (
        <>
            <Page title={title} textHandler={textHandler}>
                <UpperNav>
                    <div>
                        {filtersList.map((filter, i) => <button key={i} onClick={() => setFilter(filterParams => ({...filterParams, type: filter.toFilter}))}>{filter.label}</button>)}
                    </div>
                    <div>
                        <button><NavLink to="./create">Add {title.slice(0, -1)}</NavLink></button>
                    </div>
                </UpperNav>
                {!loading ?
                <StyledTable>
                    <thead>
                        <tr>
                            {columns.map((column, i) => (
                                <th key={i}>{column.label}{column.sort ? <button onClick={()=>setSort(column.sort)}>sort</button>: null}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => 
                            <tr key={i}>
                                {columns.map((column, j) => (
                                    <td key={j}><NavLink to={`./${row.id}`}>{column.display ? column.display(row) : row[column.property]}</NavLink></td>
                                ))}
                                <td><button onClick={() =>deleteHandler(row.id)}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </StyledTable>
                :
                <p>Loading</p>}
            </Page>
        </>
    )
}

export { TablePage }