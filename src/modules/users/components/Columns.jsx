const Columns = [
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

export { Columns }