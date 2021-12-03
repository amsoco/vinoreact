const ui_reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            console.log('loading')
            return {
                ...state,
                loading: true,
            };
        case "LOADED":
            console.log('loaded')
            return {
                ...state,
                loading: false,
            };
        default: {
            return state;
        }
    }
};

export default ui_reducer;
