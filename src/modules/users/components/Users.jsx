import userData from "../data/usersData.json"
import { useEffect, useState } from "react";
import { Table } from "../../components/Table";
import { NavLink } from "react-router-dom";
import { Back } from "../../components/Back";

const Users = () => {
    const [sortBy, setSortBy] = useState ("name");
    let newData = userData;

    if(sortBy === "name") {
        newData.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
        });
    }
    else if (sortBy === "date") {
        newData.sort(function(a, b) {
            let dateA = new Date(a.start_date);
            let dateB = new Date(b.start_date);
            return dateA - dateB;
        });
    }
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
    }, [filter, sortBy])

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
            <button onClick={() => setSortBy("date")}>Start Date</button>
            <button onClick={() => setSortBy("name")}>Name</button>
            <Table data={data} columns={columns}></Table>
        </>
    )
}

export {Users}