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

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

export { store }