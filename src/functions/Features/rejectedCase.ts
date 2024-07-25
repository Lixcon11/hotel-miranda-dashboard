const rejectedCase = () => (
    (state: any, action: any) => {
        state.status = "rejected";
        state.error = action.payload;
    }
)

export { rejectedCase }