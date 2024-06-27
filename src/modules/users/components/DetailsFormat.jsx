const DetailsFormat = [
    {display: user => <img src={user.photo}/>},
    {label: "Name: ", property: "name"},
    {label: "Email: ", property: "email"},
    {label: "Phone: ", property: "phone"},
    {label: "Start Date: ", property: "date"},
    {label: "Job: ", property: "job"},
    {label: "Job Description: ", property: "description"},
    {label: "Status: ", property: "status"}
]

export { DetailsFormat }