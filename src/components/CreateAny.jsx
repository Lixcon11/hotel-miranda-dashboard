import { useNavigate } from "react-router-dom";
import { Page } from "./Page";
import { useDispatch } from "react-redux";
import { Back } from "./Back";

const CreateAny = ({ pageData }) => {
    const { name, crud, createFormat } = pageData()
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault()

        const newObj = {}
        createFormat.map(r => {
            newObj[r.property] = e.target[r.property].value
        })
        dispatch(crud.toFetch())
        dispatch(crud.toCreate({...newObj}))
        navigate(-1)
    };

    return (
        <Page title={`Add ${name.slice(0, -1)}`}>
            <form onSubmit={submitHandler}>
                {createFormat.map((row, i) => (
                    <div key={i}>
                        <label>{row.label + ": "}</label>
                        <input name={row.property} type="text"></input>
                    </div>
                ))}
                <button type="submit">Add</button>
                <Back/>
            </form>
        </Page>
    )
}

export { CreateAny }