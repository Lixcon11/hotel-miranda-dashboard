import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./modules/users/features/userSlice";
import { contactsSlice } from "./modules/contacts/features/contactsSlice";

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        contacts: contactsSlice.reducer
    }
})

export { store }