import { useNavigate } from "react-router-dom";
import { Page } from "./Page";
import { useDispatch } from "react-redux";
import { Back } from "./Back";
import { amenities } from "../modules/rooms/functions/amenities";
import React from "react";
import { AppDispatch } from "../store";
import { DataPackage, Display } from "../types";

type CreateAnyProps = {
    pageData: () => DataPackage
}

const CreateAny = ({ pageData }: CreateAnyProps) => {
    const { name, crud, createFormat } = pageData()
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();

    const submitHandler = (e: any) => {
        e.preventDefault()

        const newObj = {}
        createFormat.map((r: Display) => {
            if(r.property) {
                if(!r.isImage && !r.isCheckbox) {
                    newObj[r.property] = e.target[r.property].value
                }
                else if(r.isCheckbox) {
                    newObj[r.property] = []
                    for(let i = 0; i < amenities.length; i++) {
                        if(e.target[r.property + i].checked) {

                            newObj[r.property].push(e.target[r.property + i].value)
                        }
                    }
                }
                else {
                    if(e.target[r.property]) {
                        const file = e.target[r.property].files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onloadend = () => {
                                if(r.property) {
                                    newObj[r.property] = reader.result;
                                }
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
                                    if(r.property) {
                                        newObj[r.property].push(reader.result);
                                    }
                                };
                            }
                            index++;
                        }
                    }
                }
            }
        })

        dispatch(crud.toCreate(newObj))
        navigate(-1)
    };

    return (
        <Page title={`Add ${name.slice(0, -1)}`} textHandler={null}>
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