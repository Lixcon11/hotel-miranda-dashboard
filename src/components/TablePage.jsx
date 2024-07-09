import { Page } from "./Page";
import { UpperNav } from "../styles/UpperNav";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { StyledTable } from "../styles/StyledTable";
import { filterBy } from "../functions/filterBy";
import { sortBy } from "../functions/sortBy";
import { CreateButton } from "../styles/CreateButton";

const TablePage = ({ pageData }) => {
    const { name, columns, filtersList, crud, loading, sortDefault, filterDefault, searchFilter } = pageData()
    const [sort, setSort] = useState (sortDefault);
    const [filter, setFilter] = useState ({type: filterDefault, word: "", searchOn: searchFilter});
    const dispatch = useDispatch();
    const { data } = useSelector(state => state[name])
    const [page, setPage] = useState(0)

    useEffect(() => {
        setSort(sortDefault);
        setFilter({type: filterDefault, word: "", searchOn: searchFilter})
    }, [sortDefault, searchFilter])
    
    const pageArray = useMemo(() => {
        let newArray = [...data]
        if(sort || filter) {
            newArray = filterBy(filter, newArray);
            newArray = sortBy(sort, newArray);
        }

        const pageArray = []
        const pageSize = 10;
        while(newArray.length > pageSize) {
            pageArray.push(newArray.splice(0, pageSize))
        }
        pageArray.push(newArray)
        setPage(0);
        
        return pageArray;
    }, [filter, sort, data])

    const deleteHandler = id => {
        dispatch(crud.toDelete(id))
    }

    const editHandler = obj => {
        dispatch(crud.toUpdate(obj))
    }
    
    const textHandler = e => {
        e.preventDefault()
        const { value } = e.target.input;
        setFilter(filterParams => ({...filterParams, word: value}))
    }

    return (
        <>
            <Page title={name} textHandler={textHandler}>
                <UpperNav>
                    <div>
                        {filtersList.map((filter, i) => <button key={i} onClick={() => setFilter(filterParams => ({...filterParams, type: filter.toFilter}))}>{filter.label}</button>)}
                    </div>
                    <div>
                        <CreateButton><NavLink to="./create">Add {name.slice(0, -1)}</NavLink></CreateButton>
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
                        {pageArray[page].map((row, i) => 
                            <tr key={i}>
                                {columns.map((column, j) => {
                                    if(column.isButton) {
                                        return <td key={j}>{column.display ? column.display(row, editHandler) : row[column.property]}</td>
                                    }
                                    else {
                                        return <td key={j}><NavLink to={`./${row.id}`}>{column.display ? column.display(row, editHandler) : row[column.property]}</NavLink></td>
                                    }
                                })}
                                <td><button onClick={() =>deleteHandler(row.id)}>Delete</button></td>
                            </tr>
                        )}
                    </tbody>
                </StyledTable>
                :
                <p>Loading</p>}
                <button onClick={() => setPage(page => page === 0 ? 0: page-1)}>{"<"}</button>
                {pageArray.map((array,i) => <button key={i} onClick={() => setPage(i)}>{i+1}</button>)}
                <button onClick={() => setPage(page => page === pageArray.length-1 ? pageArray.length-1: page+1)}>{">"}</button>
            </Page>
        </>
    )
}

export { TablePage }