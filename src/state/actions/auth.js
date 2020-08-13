import service from '../../service';
import { apiKey } from '../../const';
export const login = (email, password) => {
    
    return dispatch => {

        dispatch({type: "POST_LOGIN_REQUEST"})

        service.post(
            `accounts:signInWithPassword?key=${apiKey}`, 
            {email, password}, 
            {baseURL: "https://identitytoolkit.googleapis.com/v1/", headers: {Authorization: null}}
        ).then(res => {
            console.log(res.data);
            localStorage.setItem("user", res.data);
            dispatch({type: "SET_AUTH_USER", payload: res.data})
        }).catch(err => {
            console.log(err);
            dispatch({type: "POST_LOGIN_FAIL", payload: "Hata oluştu!."})
        });
    }
}