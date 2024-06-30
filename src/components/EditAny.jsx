import { useNavigate, useParams } from "react-router-dom";
import { Page } from "./Page";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Back } from "./Back";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const EditAny = ({ pageData }) => {
    const { title, crud, data, loading } = pageData().generalData();
    const { id } = useParams();
    const obj = data.filter(obj => obj.id == id)[0];
    const [variable, setVariable] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { authDispatch, authState } = useContext(AuthContext);
    
    useEffect(()=> {
        if(!loading){
            setVariable({...obj})
        }
    },[loading]);

    const nameList = useMemo(()=>{
        const newList= []
        for(let i in obj) {
            if(i !== "id" && i !=="password") {
                newList.push(i)
            }
        }
        return newList;
    }, [loading])

    const submitHandler = e => {
        e.preventDefault()
        const newObj = {...obj}
        nameList.map(name => newObj[name] = e.target[name].value)
        dispatch(crud.toUpdate(newObj))
        
        if(title === "users") {
            if(authState.id === obj.id) {
                authDispatch({type: "updateUser", payload: {name: newObj.name, photo: newObj.photo, email: newObj.email}})
                console.log(authState)
            }
        }
        navigate(-1)
    };

    return (
        <>
            <Page title={`Edit ${title.slice(0, -1)}`}>
                {!loading && variable ? 
                <>
                    <StyledForm onSubmit={submitHandler}>
                        {nameList.map((name, i) => (
                            <div key={i}>
                                <label>{name + ": "}</label>
                                <input name={name} type="text" value={variable[name]} onChange={(e)=> setVariable(variables => ({...variables, [name]: e.target.value}))} ></input>
                            </div>
                        ))}
                        <button type="submit">Edit</button>
                        <Back/>
                    </StyledForm>
                </>
                :
                <p>Loading</p>}
            </Page>
        </>
    )
}

const StyledForm = styled.form`

    label {
        text-transform: capitalize;
    }
`

export {EditAny}