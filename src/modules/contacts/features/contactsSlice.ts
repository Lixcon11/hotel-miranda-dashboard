import { crudSlice } from "../../../functions/Features/crudSlice";
import { ContactState } from "../../../types";
//import contactsData from "../data/contactsData.json"

///const data: ContactState[] = contactsData as ContactState[]

const [ contactsSlice, crud ] = crudSlice<ContactState>(/*data ,*/"contacts");

export { contactsSlice, crud }