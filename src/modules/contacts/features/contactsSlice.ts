import { crudSlice } from "../../../functions/features/crudSlice";
import { ContactState } from "../../../types";
import contactsData from "../data/contactsData.json"

const [ contactsSlice, crud ] = crudSlice<ContactState>(contactsData ,"contacts");

export { contactsSlice, crud }