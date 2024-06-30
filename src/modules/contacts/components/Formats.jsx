import { createFormat } from "../../../functions/createFormats";

const formats = createFormat(
    [
        {label: "Date", property: "date"},
        {label: "Customer", property: "name"},
        {label: "Comment", display: contact => (
            <>
                <p>{contact.subject}</p>
                <p>{contact.comment}</p>
            </>
        )},
        {label: "Action", display: contact => <button>Archive</button>}
    ],
    [],
    [],
    [
        {label: "Published", toFilter: "Published"},
        {label: "Archived", toFilter: "Archived"}
    ]
)

export { formats }