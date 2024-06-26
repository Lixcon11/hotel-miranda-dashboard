const rejectedCase = fetchThunk => (
    (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
    }
)

export { rejectedCase }