import { useState } from "react";
import contactData from "../data/contactData.json"
import { Table } from "../../components/Table";
import { sortBy } from "../../../functions/sortBy";
import { columns } from "../functions/columns";
import { Back } from "../../components/Back";

const Contact = () => {
    let newData = sortBy("date", contactData);
    const [data, setData] = useState(newData);

    return (
        <>
            <h1>Contact</h1>
            <Back/>
            <Table data={data} columns={columns}></Table>
        </>
    )
}

export {Contact}