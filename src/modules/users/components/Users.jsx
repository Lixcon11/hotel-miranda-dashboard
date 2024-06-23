import userData from "../data/usersData.json"
import { useEffect, useState } from "react";
import { Table } from "../../../components/Table";
import { NavLink } from "react-router-dom";
import { sortBy } from "../../../functions/sortBy";
import { Header } from "../../../components/Header";
import { Display } from "../../../components/Display";
import { Columns } from "./Columns";

const Users = () => {
    const [sort, setSort] = useState ("name");
    let newData = sortBy(sort, userData);
    const [data, setData] = useState(newData);
    const [filter, setFilter] = useState ();

    useEffect(() => {
        let otherData = []

        if(filter) {

            if(filter === "active") {
                otherData = userData.filter(user => user.status === true)
            }
            else if(filter === "inactive") {
                otherData = userData.filter(user => user.status === false)
            }
        }
        else {
            otherData = userData;
        }

        setData(otherData);
    }, [filter, sort])

    return (
        <>
            <Header>Users</Header>
            <Display>
                <div>
                    <div>
                        <button onClick={() => setFilter("")}>All</button>
                        <button onClick={() => setFilter("active")}>Active</button>
                        <button onClick={() => setFilter("inactive")}>Inactive</button>
                    </div>
                    <div>
                        <button onClick={() => setSort("date")}>Start Date</button>
                        <button onClick={() => setSort("name")}>Name</button>
                        <button><NavLink to="./create">New user</NavLink></button>
                    </div>
                </div>
                <Table data={data} columns={Columns}/>
            </Display>
        </>
    )
}

export {Users}