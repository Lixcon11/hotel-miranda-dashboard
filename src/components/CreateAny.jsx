import { useNavigate } from "react-router-dom";
import { Page } from "./Page";
import { useDispatch } from "react-redux";
import { Back } from "./Back";

const CreateAny = ({ pageData }) => {
    const { title, crud, loading, createFormat } = pageData().generalData();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault()

        const newObj = {}
        createFormat.map(r => {
            newObj[r.property] = e.target[r.property].value
        })
        dispatch(crud.toCreate({...newObj}))
        navigate(-1)
    };

    return (
        <>
            <Page title={`Add ${title.slice(0, -1)}`}>
                {!loading ? 
                <>
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
                </>
                :
                <p>Loading</p>}
            </Page>
        </>
    )
}

export { CreateAny }