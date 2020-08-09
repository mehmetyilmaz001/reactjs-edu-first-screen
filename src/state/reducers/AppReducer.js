
const INITIAL_APP_STATE = {
    title: "First Screen"
};

export default (state = INITIAL_APP_STATE, action) => {
    switch (action.type) {
        case "SET_PAGE_TITLE":
            return {...state, title: action.payload}
    
        default:
            return state;
    }
}