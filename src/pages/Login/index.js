import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { login } from '../../state/actions/auth';
import { useDidUpdate } from '../../hooks';


const LoginPage = () => {

    const [state, setState] = useState({
        userName: "m@m.com",
        pass: "123456"
    });

    const msg = useSelector(s => s.auth.msg);
    const loading = useSelector(s => s.auth.loading);
    const hasErr = useSelector(s => s.auth.hasErr);

    const dispatch = useDispatch();

    const _login = () => {
        if (state.userName === "" && state.pass === "") {
            return
        }
        dispatch(login(state.userName, state.pass));
    }


    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    useDidUpdate(() => {
        if(!hasErr){
            console.log("hasr", hasErr, from);
            history.replace(from);
        }
    }, [loading])


    return (
        <div className="login-form">
            <label>Kullanıcı Adı</label> <input value={state.userName} onChange={(e) => setState({ ...state, userName: e.target.value })} /> <br />
            <label>Şifre</label> <input value={state.pass} onChange={(e) => setState({ ...state, pass: e.target.value })} /> <br />

            <button onClick={_login}>{loading ? "Giriş Yapılıyor..." : "Giriş Yap"}</button>

            <br />
            <br />

            {msg && <span style={{ color: hasErr ? "red" : "green" }}>{msg}</span>}
        </div>
    );
}

export default LoginPage;