import userData from "../data/usersData.json"
import { useEffect, useState } from "react";
import { Table } from "../../components/Table";
import { NavLink } from "react-router-dom";
import { Back } from "../../components/Back";
import { sortBy } from "../../../functions/sortBy";

const Users = () => {
    const [sort, setSort] = useState ("name");
    let newData = sortBy(sort, userData);
    const [data, setData] = useState(newData);
    const [filter, setFilter] = useState ();
    const columns = [
        {label: "Name", display: user => (
            <>
                <img src={`${user.photo}`} className="photo"></img>
                <div className="inline-block">
                    <p>{user.name}</p>
                    <p>{user.start_date}</p>
                </div>
            </>
        )},
        {label: "Job Desk", property: "description"},
        {label: "Contact", display: user => (
            <>
                <p>{user.contact}</p>
                <p>{user.email}</p>
            </>
        )},
        {label: "Status", display: user => user.status ? "ACTIVE" : "INACTIVE"},
    ];

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
    }, [filter])

    return (
        <>
            <h1>Users</h1>
            <Back/>
            <br/>
            <button><NavLink to="./create">New user</NavLink></button>
            <br/>
            <button onClick={() => setFilter("")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("inactive")}>Inactive</button>
            <br/>
            <button onClick={() => setSort("date")}>Start Date</button>
            <button onClick={() => setSort("name")}>Name</button>
            <Table data={data} columns={columns}></Table>
        </>
    )
}

export {Users}