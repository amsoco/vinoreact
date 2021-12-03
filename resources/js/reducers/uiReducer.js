const ui_reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            console.log('loading')
            return {
                loading: true,
            };
        case "LOADED":
            console.log('loaded')
            return {
                loading: false,
            };
        default: {
            return state;
        }
    }
};

export default ui_reducer;
