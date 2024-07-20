const pendingCase = () => (
    (state: any) => {
        state.status = "pending";
        state.error = null;
    }
)

export { pendingCase }