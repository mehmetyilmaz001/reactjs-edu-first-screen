
const INITIAL_APP_STATE = {
    authUser: {
        kind: null,
        localId: null,
        email: null,
        displayName: null,
        idToken: null,
        registered: false
    },
    loading: false,
    msg: "",
    hasErr: false
};

export default (state = INITIAL_APP_STATE, action) => {
    switch (action.type) {
        
        case "POST_LOGIN_REQUEST":
            return {...state, loading: true}
        
        case "SET_AUTH_USER":
            return {...state, authUser: action.payload, loading: false, hasErr: false, msg: ""}

        case "POST_LOGIN_FAIL":
                return {...state, msg: action.payload, hasErr: true, loading: false}
    
        default:
            return state;
    }
}