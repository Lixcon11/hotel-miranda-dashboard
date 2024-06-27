import { useNavigate, useParams } from "react-router-dom";
import { Page } from "./Page";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const EditAny = ({ pageData }) => {
    const { title, crud, data, loading } = pageData();
    const { id } = useParams();
    const obj = data.filter(obj => obj.id !== id)[0];
    const [variable, setVariable] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
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
        navigate(-1)
        //console.log(nameList)
    };

    return (
        <>
            <Page>
                {!loading && variable ? 
                <StyledForm onSubmit={submitHandler}>
                    {nameList.map((name, i) => (
                        <div key={i}>
                            <label>{name}</label>
                            <input name={name} type="text" value={variable[name]} onChange={(e)=> setVariable(variables => ({...variables, [name]: e.target.value}))} ></input>
                        </div>
                    ))}
                    <button type="submit">Edit</button>
                </StyledForm>
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