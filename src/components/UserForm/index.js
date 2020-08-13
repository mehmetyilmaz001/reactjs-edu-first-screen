import React, { useState } from 'react';
import { useDidUpdate } from '../../hooks';
import { insertUser } from '../../state/actions/users';
import { useSelector, useDispatch } from 'react-redux';

const initial = {
    name: "",
    surname: "",
    city: ""
}

const UserForm = () => {

    const [state, setState] = useState(initial);

    const msg = useSelector(s => s.auth.msg);
    const loading = useSelector(s => s.auth.loading);
    const hasErr = useSelector(s => s.auth.hasErr);

    const dispatch = useDispatch();

    const _save = () => {
        if (state.name === "" || state.surname === "" || state.city === "") {
            return
        }
        dispatch(insertUser(state));
    }

    useDidUpdate(() => {
        if(!hasErr){
            setState(initial);
        }
    }, [hasErr])

    return ( 
        <>
            <label>İsim</label> <input value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} /> <br />
            <label>Soyisim</label> <input value={state.surname} onChange={(e) => setState({ ...state, surname: e.target.value })} /> <br />
            <label>Şehir</label> <input value={state.city} onChange={(e) => setState({ ...state, city: e.target.value })} /> <br />

            <button onClick={_save}>{loading ? "Kaydediliyor..." : "Kaydet"}</button>

            <br />
            <br />

            {msg && <span style={{ color: hasErr ? "red" : "green" }}>{msg}</span>}
        </>
     );
}
 
export default UserForm;