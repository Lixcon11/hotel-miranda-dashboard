import { useState } from "react";
import contactData from "../data/contactData.json"
import { Table } from "../../../components/Table";
import { sortBy } from "../../../functions/sortBy";
import { Header } from "../../../components/Header";
import { Display } from "../../../components/Display";
import { Columns } from "./Columns";

const Contact = () => {
    let newData = sortBy("date", contactData);
    const [data, setData] = useState(newData);

    return (
        <>
            <Header>Contact</Header>
            <Display>
                <Table data={data} columns={Columns}/>
            </Display>
        </>
    )
}

export {Contact}