
const INITIAL_APP_STATE = {
    list: [],
    userDetail: null,
    loading: false,
    msg: "",
    hasErr: false
};

export default (state = INITIAL_APP_STATE, action) => {
    switch (action.type) {
        
        case "FETCH_USER_REQUEST":
            return {...state, loading: true}
        
        case "FETCH_USER_SUCCESS":
            return {...state, list: action.payload, loading: false, hasErr: false, msg: ""}

        case "FETCH_USER_FAIL":
                return {...state, msg: action.payload, hasErr: true, loading: false}
        
        
        case "POST_USER_REQUEST":
            return {...state, loading: true}
        
        case "POST_USER_SUCCESS":
            return {...state, list: [...state.list, action.payload], loading: false, hasErr: false, msg: ""}

        case "POST_USER_FAIL":
                return {...state, msg: action.payload, hasErr: true, loading: false}
        
        
        case "FETCH_USER_DETAIL_REQUEST":
            return {...state, loading: true}
        
        case "FETCH_USER_DETAIL_SUCCESS":
            return {...state, userDetail: action.payload, loading: false, hasErr: false, msg: ""}

        case "FETCH_USER_DETAIL_FAIL":
                return {...state, msg: action.payload, hasErr: true, loading: false}
    
        default:
            return state;
    }
}