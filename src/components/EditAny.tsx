import { useNavigate, useParams } from "react-router-dom";
import { Page } from "./Page";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Back } from "./Back";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useGet } from "../hooks/useGet";
import React from "react";
import { DataState } from "../types";

const EditAny = ({ pageData }) => {
    const { name, crud, loading } = pageData()
    const { id } = useParams();
    const obj = useGet(name, crud, String(id))
    const [variable, setVariable] = useState<DataState>({...obj});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { authDispatch, authState } = useContext(AuthContext);
    
    useEffect(()=> {
        if(obj){
            setVariable({...obj})
        }
    },[obj]);

    const nameList = useMemo(()=>{
        const newList: string[]= []
        for(let i in obj) {
            if(i !== "id" && i !=="password") {
                newList.push(i)
            }
        }
        return newList;
    }, [obj])

    const submitHandler = (e: any) => {
        e.preventDefault()
        const newObj = {...obj}
        nameList.map(name => newObj[name] = e.target[name].value)
        dispatch(crud.toUpdate(newObj))
        
        if(name === "users") {
            if(authState._id === obj.id) {
                authDispatch({type: "updateUser", payload: {name: newObj.name, photo: newObj.photo, email: newObj.email}})
                console.log(authState)
            }
        }
        navigate(-1)
    };

    return (
        <>
            <Page title={`Edit ${name.slice(0, -1)}`} textHandler={() => null}>
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