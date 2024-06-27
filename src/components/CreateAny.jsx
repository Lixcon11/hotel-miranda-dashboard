import { useNavigate, useParams } from "react-router-dom";
import { Page } from "./Page";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Back } from "./Back";

const CreateAny = ({ pageData }) => {
    const { title, crud, data, loading, createFormat } = pageData();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault()

        const newObj = {}
        createFormat.map(r => {
            newObj[r.property] = e.target[r.property].value
        })
        const idList = data.map(obj => obj.id).sort((a, b) => a - b);
        let newId = 1;
        for (let id of idList) {
            if(id === newId) {
                newId++;
            } 
            else {
                break;
            }
        }
       dispatch(crud.toCreate({id: newId, ...newObj}))
        navigate(-1)
    };

    return (
        <>
            <Page title={`Add ${title.slice(0, -1)}`}>
                {!loading ? 
                <>
                    <StyledForm onSubmit={submitHandler}>
                        {createFormat.map((row, i) => (
                            <div key={i}>
                                <label>{row.label + ": "}</label>
                                <input name={row.property} type="text"></input>
                            </div>
                        ))}
                        <button type="submit">Add</button>
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

export { CreateAny }