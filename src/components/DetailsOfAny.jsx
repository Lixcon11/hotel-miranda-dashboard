/* eslint-disable react/prop-types */
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { Page } from "./Page"
import { Back } from "./Back"
import { useDispatch } from "react-redux"

const DetailsOfAny = ({ pageData}) => {
    const { id } = useParams();
    const {title, crud, data, loading, detailsFormat } = pageData().generalData();
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
                    {detailsFormat.map((field, i) => field.display ? field.display(obj, i) : <p key={i}>{field.label + obj[field.property]}</p>)}
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