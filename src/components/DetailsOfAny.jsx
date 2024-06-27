/* eslint-disable react/prop-types */
import { NavLink, Navigate, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Page } from "./Page"
import { Back } from "./Back"
import { useDispatch } from "react-redux"
import { useState } from "react"

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

const Align = styled.div`
    //display: flex;
    //gap: 4px;

    img {
        height: 250px;
        width: 250px;
    }
`

const DeatilsOfAny = ({ format, pageData, id}) => {
    const {title, crud, data, loading } = pageData();
    const obj = data.filter(obj => obj.id == id)[0]
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const deleteHandler = () => {
        dispatch(crud.toDelete(obj.id))
        navigate(-1)
    }

    return (
        <> 
            <Page title={`Details of ${title.slice(0, -1)}`}>
                {!loading && obj ?
                <>
                    {format.map((field, i) => field.display ? <Align key={i}><p>{field.label}</p>{field.display(obj)}</Align> : <p key={i}>{field.label + obj[field.property]}</p>)}
                    <button><NavLink to="./edit">Edit</NavLink></button>
                    <button onClick={deleteHandler}>Delete</button>
                    <Back></Back>
                </>
                :
                <p>Loading</p>}
            </Page>
        </>
    )
}

export {DeatilsOfAny}