import { pendingCase } from "./pendingCase";
import { rejectedCase } from "./rejectedCase";

const extraReducers = (builder, fetchThunk) => {
    return(
        
    builder
    .addCase(fetchThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.error = null;
        state.data = action.payload;
    })
    .addCase(fetchThunk.pending, pendingCase())
    .addCase(fetchThunk.rejected, rejectedCase())
)}

export { extraReducers }