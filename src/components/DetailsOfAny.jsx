/* eslint-disable react/prop-types */
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { Page } from "./Page"
import { Back } from "./Back"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { useGet } from "../hooks/useGet"

const DetailsOfAny = ({ pageData}) => {
    const { id } = useParams();
    const { name, crud, detailsFormat, loading } = pageData()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const obj = useGet(name, crud, id)

    const deleteHandler = () => {
        dispatch(crud.toDelete(obj.id))
        navigate(-1)
    };

    return (
        <> 
            <Page title={`${name.slice(0, -1)} Details`}>
                {!loading && obj ?
                <>
                    {detailsFormat.map((field, i) => field.display ? <Center key={i}>{field.label ? <p>{field.label + ":"}&nbsp;</p>: null}{field.display(obj, i)}</Center> : <p key={i}>{field.label + ": " + obj[field.property]}</p>)}
                    <button><NavLink to="./edit">Edit</NavLink></button>
                    <button onClick={deleteHandler}>Delete</button>
                    <Back/>
                </>
                :
                <p>Loading</p>}
            </Page>
        </>
    )
}

const Center = styled.div`
    p {
    display: inline-block;
    }
`

export { DetailsOfAny }