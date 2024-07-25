import { useState } from "react";
import { PictureUploader } from "../../../components/PictureUploader";
import { createFormat } from "../../../functions/createFormats";
import { ImageContainerTable } from "../../../styles/ImageContainerTable";
import { MediumImg } from "../../../styles/MediumImg";
import { ImageProfile } from "../../../styles/ImageProfile";
import { Formats } from "../../../types";
import React from 'react';

const NewFormats: Formats = createFormat(
    [
        {label: "Name", display: user => (
            <>
                <ImageContainerTable>
                    <img src={user.photo}></img>
                    <div>
                        <p>{user.name}</p>
                    </div>
                </ImageContainerTable>
            </>
        ), sort: "name"},
        {label: "Joined On", property: "date", sort: "date"},
        {label: "Job Desk", display: user => (
            <>
            <p>{user.job}</p>
            <p>{user.description}</p>
        </>
        )},
        {label: "Contact", display: user => (
            <>
                <p>{user.phone}</p>
                <p>{user.email}</p>
            </>
        )},
        {label: "Status", property: "status"}
    ],
    [
        {display: (user, i) => <ImageProfile key={i} src={user.photo}/>},
        {label: "Name", property: "name"},
        {label: "Email", property: "email"},
        {label: "Phone", property: "phone"},
        {label: "Start Date", property: "date"},
        {label: "Job", property: "job"},
        {label: "Job Description", property: "description"},
        {label: "Status", property: "status"}
    ],
    [
        {property: "photo", display: (name) => <PictureUploader name={name} isBed={false}/>, isImage: true},
        {label: "Name", property: "name"},
        {label: "Email", property: "email"},
        {label: "Phone", property: "phone"},
        {label: "Start Date", property: "date"},
        {label: "Job", property: "job"},
        {label: "Job Description", property: "description"},
        {label: "Status", property: "status"},
        {label: "Password", property: "password"}
    ],
    [
        {label: "All", toFilter: ""},
        {label: "Active", toFilter: "ACTIVE"},
        {label: "Inactive", toFilter: "INACTIVE"}
    ]
)

export { NewFormats }