import { useNavigate } from "react-router-dom";

const CreateAny = () => {
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        navigate("./../")
        //console.log(e.target[0].value)
    }
    
    return (
        <>
            <form onSubmit={e => submitHandler(e)}>
                <input type="text" name="name"></input>
                <input type="text"name="email"></input>
                <input type="submit" />
            </form>
        </>
    )
}

export {CreateAny}