const fullfilledResponse = state => {
    state.status = "fulfilled";
    state.error = null;
}

export { fullfilledResponse }