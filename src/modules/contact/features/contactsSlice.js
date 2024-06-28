import { crudSlice } from "../../../functions/features/crudSlice";
import contactsData from "../data/contactData.json"

const [ contactsSlice, fetchContacts, createContact, updateContact, deleteContact ] = crudSlice(contactsData ,"contacts");

export { contactsSlice, fetchContacts, createContact, updateContact, deleteContact }