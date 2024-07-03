import { useState } from "react";
import { PictureUploader } from "../../../components/PictureUploader";
import { createFormat } from "../../../functions/createFormats";
import { ImageContainerTable } from "../../../styles/ImageContainerTable";
import { MediumImg } from "../../../styles/MediumImg";

const formats = createFormat(
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
        {display: (user, i) => <MediumImg key={i} src={user.photo}/>},
        {label: "Name", property: "name"},
        {label: "Email", property: "email"},
        {label: "Phone", property: "phone"},
        {label: "Start Date", property: "date"},
        {label: "Job", property: "job"},
        {label: "Job Description", property: "description"},
        {label: "Status", property: "status"}
    ],
    [
        {label: "Photo", property: "photo", display: (name) => {
            //const [image, setImage] = useState(null);
            return(
                <PictureUploader /*image={image} setImage={setImage}*/ name={name}/>
            )
        }, isImage: true},
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

export { formats }