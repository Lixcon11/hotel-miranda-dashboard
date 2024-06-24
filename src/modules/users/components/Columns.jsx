import { ImageContainerTable } from "../../../styles/ImageContainerTable";

const Columns = [
    {label: "Name", display: user => (
        <>
            <ImageContainerTable>
                <img src={user.photo}></img>
                <div>
                    <p>{user.name}</p>
                    <p>{user.start_date}</p>
                </div>
            </ImageContainerTable>
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

export { Columns }