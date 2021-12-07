const ui_reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                loading: true,
            };
        case "LOADED":
            return {
                loading: false,
            };
        default: {
            return state;
        }
    }
};

export default ui_reducer;
