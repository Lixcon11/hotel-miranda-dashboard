const fullfilledResponse = (state: any) => {
    state.status = "fulfilled";
    state.error = null;
}

export { fullfilledResponse }