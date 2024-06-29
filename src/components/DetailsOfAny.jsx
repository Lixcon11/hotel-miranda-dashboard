/* eslint-disable react/prop-types */
import { NavLink, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Page } from "./Page"
import { Back } from "./Back"
import { useDispatch } from "react-redux"

const Align = styled.div`
    //display: flex;
    //gap: 4px;

    img {
        height: 250px;
        width: 250px;
    }
`

const DetailsOfAny = ({ pageData}) => {
    const { id } = useParams();
    const {title, crud, data, loading, detailsFormat } = pageData();
    const obj = data.filter(obj => obj.id == id)[0];
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const deleteHandler = () => {
        dispatch(crud.toDelete(obj.id))
        navigate(-1)
    };

    return (
        <> 
            <Page title={`${title.slice(0, -1)} Details`}>
                {!loading && obj ?
                <>
                    {detailsFormat.map((field, i) => field.display ? <Align key={i}><p>{field.label}</p>{field.display(obj)}</Align> : <p key={i}>{field.label + obj[field.property]}</p>)}
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

export { DetailsOfAny }