import userData from "../data/usersData.json"
import { useEffect, useMemo, useState } from "react";
import { Table } from "../../../components/Table";
import { NavLink } from "react-router-dom";
import { sortBy } from "../../../functions/sortBy";
import { Columns } from "./Columns";
import { Page } from "../../../components/Page";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../slice/fetchUsers";

const Users = () => {
    const [loading, setLoading] = useState(true);
    const [sort, setSort] = useState ("name");
    const [filter, setFilter] = useState ();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    const usersStatus = users.status;
    const usersData = users.data;
    const usersError = users.error;

    if(!usersData[0]) {
        dispatch(fetchUsers())
    }

    const data = useMemo(() => {
        let newData = []

        if(usersStatus === "fulfilled") {
            if(filter) {

                if(filter === "active") {
                    newData = usersData.filter(user => user.status === true)
                }
                else if(filter === "inactive") {
                    newData = usersData.filter(user => user.status === false)
                }
            }
            else {
                newData = usersData;
            }
    
            newData = sortBy(sort, newData)
            setLoading(false);
            return newData;
        }
        if(usersStatus === "rejected") {
            alert(`Error: ${usersError}`)
            setLoading(false);
        }
        else if(usersStatus === "pending") {
            setLoading(true);
        }

        return [];
    }, [filter, sort, usersStatus])

    return (

        <Page title="Users">
                <div>
                    <div>
                        <button onClick={() => setFilter("")}>All</button>
                        <button onClick={() => setFilter("active")}>Active</button>
                        <button onClick={() => setFilter("inactive")}>Inactive</button>
                    </div>
                    <div>
                        <button onClick={() => setSort("date")}>Start Date</button>
                        <button onClick={() => setSort("name")}>Name</button>
                        <button><NavLink to="./create">+ New User</NavLink></button>
                    </div>
                </div>
                {!loading ? <Table data={data} columns={Columns}/>: <p>Loading</p>}
        </Page>
    )
}

export {Users}