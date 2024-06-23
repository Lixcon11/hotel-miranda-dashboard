import styled from "styled-components";

const Name = styled.div`
display: flex;

    img {
        height: 50px;
        width: 50px;
        margin-right: 10px;
    }

    p {
        white-space:nowrap;
    }
`



const Columns = [
    {label: "Name", display: user => (
        <>
            <Name>
                <img src={user.photo}></img>
                <div>
                    <p>{user.name}</p>
                    <p>{user.start_date}</p>
                </div>
            </Name>
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