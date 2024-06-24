import { useState } from "react";
import contactData from "../data/contactData.json"
import { Table } from "../../../components/Table";
import { sortBy } from "../../../functions/sortBy";
import { Columns } from "./Columns";
import { Page } from "../../../components/Page";

const Contact = () => {
    let newData = sortBy("date", contactData);
    const [data, setData] = useState(newData);

    return (
        <>
            <Page title="Contact">
                <Table data={data} columns={Columns}/>
            </Page>
        </>
    )
}

export {Contact}