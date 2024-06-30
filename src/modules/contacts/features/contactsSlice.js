import { crudSlice } from "../../../functions/features/crudSlice";
import contactsData from "../data/contactsData.json"

const [ contactsSlice, crud ] = crudSlice(contactsData ,"contacts");

export { contactsSlice, crud }