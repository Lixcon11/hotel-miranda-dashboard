import { ImageContainerTable } from "../../../styles/ImageContainerTable";

const Columns = [
    {label: "Name", display: user => (
        <>
            <ImageContainerTable>
                <img src={user.photo}></img>
                <div>
                    <p>{user.name}</p>
                    <p>{user.date}</p>
                </div>
            </ImageContainerTable>
        </>
    )},
    {label: "Job Desk", display: user => (
        <>
        <p>{user.job}</p>
        <p>{user.description}</p>
    </>
    )},
    {label: "Contact", display: user => (
        <>
            <p>{user.phone}</p>
            <p>{user.email}</p>
        </>
    )},
    {label: "Status", display: user => user.status ? "ACTIVE" : "INACTIVE"}
];

export { Columns }