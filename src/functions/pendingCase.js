const pendingCase = () => (
    (state) => {
        state.status = "pending";
        state.error = null;
    }
)

export { pendingCase }