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
            //newObj[r.property] = e.target[r.property].value
            
            if(!r.isImage) {
                newObj[r.property] = e.target[r.property].value
            }
            else {
                const file = e.target[r.property].files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                        newObj[r.property] = reader.result;
                    };
                }
            }
        })
        console.log(newObj)
        dispatch(crud.toFetch())
        dispatch(crud.toCreate(newObj))
        navigate(-1)
    };

    return (
        <Page title={`Add ${name.slice(0, -1)}`}>
            <form onSubmit={submitHandler}>
                {createFormat.map((row, i) => (
                    <div key={i}>
                        <label>{row.label + ": "}</label>
                        {row.display ? row.display(row.property) :<input name={row.property} type="text"></input>}
                    </div>
                ))}
                <button type="submit">Add</button>
                <Back/>
            </form>
        </Page>
    )
}

export { CreateAny }