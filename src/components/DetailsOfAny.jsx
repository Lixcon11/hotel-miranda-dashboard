/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Page } from "./Page"

const format = {
    user: [
        {display: user => <img src={user.photo}/>},
        {label: "Name: ", property: "name"},
        {label: "Email: ", property: "email"},
        {label: "Phone: ", property: "phone"},
        {label: "Start Date: ", property: "date"},
        {label: "Job: ", property: "job"},
        {label: "Job Description: ", property: "description"},
        {label: "Status: ", property: "status"}
    ]
}

const Align = styled.div`
    //display: flex;
    //gap: 4px;

    img {
        height: 250px;
        width: 250px;
    }
`

const DeatilsOfAny = ({data, type}) => {
    return (
        <> 
            <Page>
                {data ?
                <>
                    {format[type].map((field, i) => field.display ? <Align key={i}><p>{field.label}</p>{field.display(data)}</Align> : <p key={i}>{field.label + data[field.property]}</p>)}
                    <button><NavLink to="./edit">Edit</NavLink></button>
                    <button>Delete</button>
                </>
                :
                <p>Loading</p>}
            </Page>
        </>
    )
}

export {DeatilsOfAny}