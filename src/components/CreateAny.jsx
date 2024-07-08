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
            
            if(!r.isImage && !r.isCheckbox) {
                newObj[r.property] = e.target[r.property].value
            }
            else {
                if(e.target[r.property]) {
                    const file = e.target[r.property].files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onloadend = () => {
                            newObj[r.property] = reader.result;
                        };
                    }
                }
                else {
                    let index = 0;
                    newObj[r.property] = []
                    while(e.target[r.property + index]) {
                        const file = e.target[r.property + index].files[0];
                        console.log(file)
                        if (file) {
                            const reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onloadend = () => {
                                newObj[r.property].push(reader.result);
                            };
                        }
                        index++;
                    }
                }
            }
        })
        console.log(newObj)

        dispatch(crud.toCreate(newObj))
        navigate(-1)
    };

    return (
        <Page title={`Add ${name.slice(0, -1)}`}>
            <form onSubmit={submitHandler}>
                {createFormat.map((row, i) => (
                    <div key={i}>
                        {row.label ? <label>{row.label + ": "}</label> : null}
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