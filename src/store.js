import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./modules/users/features/userSlice";

const store = configureStore({
    reducer: {
        users: userSlice.reducer
    }
})

export { store }