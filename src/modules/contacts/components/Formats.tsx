import { createFormat } from "../../../functions/createFormats";
import React from "react";
import { Formats } from "../../../types";

const NewFormats: Formats = createFormat(
    [
        {label: "Date", property: "date"},
        {label: "Customer", property: "name"},
        {label: "Comment", display: contact => (
            <>
                <p>{contact.subject}</p>
                <p>{contact.comment}</p>
            </>
        )},
        {label: "Action", isButton: true, display: (contact, editHandler) => (
            <button onClick={() => editHandler({id: contact.id, status: contact.status === "Published" ? "Archived": "Published"})}>
                {contact.status === "Published" ? "Archive": "Publish"}
            </button>
            )
        }
    ],
    [
        {label: "Name", property: "name"},
        {label: "Date", property: "date"},
        {label: "Email", property: "email"},
        {label: "Phone", property: "phone"},
        {label: "Subject", property: "subject"},
        {label: "Comment", property: "comment"},
        {label: "Status", property: "status"}
    ],
    [
        {label: "Name", property: "name"},
        {label: "Date", property: "date"},
        {label: "Email", property: "email"},
        {label: "Phone", property: "phone"},
        {label: "Subject", property: "subject"},
        {label: "Comment", property: "comment"},
        {label: "Status", property: "status"}
    ],
    [
        {label: "Published", toFilter: "Published"},
        {label: "Archived", toFilter: "Archived"}
    ]
)

export { NewFormats }