import { Table } from "./Table";
import { Page } from "./Page";
import { UpperNav } from "./UpperNav";
import { NavLink } from "react-router-dom";
import useDataProvider from "../hooks/useDataProvider";
import { useDispatch } from "react-redux";


const TablePage = ({ pageData }) => {
    const {title, columns, dataParams, filterList, crud } = pageData;
    const { data, loading, setSort, setFilter } = useDataProvider(dataParams, crud.toFetch)
    const dispatch = useDispatch();

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
                            {filterList.map((filter, i) => <button key={i} onClick={() => setFilter(filterParams => ({...filterParams, type: filter.toFilter}))}>{filter.label}</button>)}
                        </div>
                        <div>
                            <button><NavLink to="./create">Add {title.slice(0, -1)}</NavLink></button>
                        </div>
                    </UpperNav>
                    <Table data={data} columns={columns} loading={loading} deleteHandler={deleteHandler} setSort={setSort}/>
            </Page>
        </>
    )
}

export { TablePage }