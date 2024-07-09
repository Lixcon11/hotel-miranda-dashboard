import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./modules/users/features/userSlice";
import { contactsSlice } from "./modules/contacts/features/contactsSlice";
import { roomsSlice } from "./modules/rooms/features/roomsSlice";
import { bookingsSlice } from "./modules/bookings/features/bookingsSlice";

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        contacts: contactsSlice.reducer,
        rooms: roomsSlice.reducer,
        bookings: bookingsSlice.reducer
    }
})

export { store }