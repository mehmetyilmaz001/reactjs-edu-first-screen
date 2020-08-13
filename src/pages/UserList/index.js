import React from 'react';
//import { users } from '../../data';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getUsers } from '../../state/actions/users';
import { useSelector } from 'react-redux';
import UserForm from '../../components/UserForm';

const UserList = () => {

    let history = useHistory();

    const dispatch = useDispatch();


    const loading = useSelector(s => s.users.loading);
    const msg = useSelector(s => s.users.msg);
    const users = useSelector(s => s.users.list);

    React.useEffect(() => {
        dispatch({
            type: "SET_PAGE_TITLE",
            payload: "User List"
        });

        dispatch(getUsers())
        // eslint-disable-next-line
    }, []);


    if(loading){
        return <>Yükleniyor...</>
    }

    return (
        <>
            <aside>
                {msg && msg}
                <ul>
                    {
                        users.map(i =>
                            <li>
                                <button 
                                    onClick={() => history.push(`user-detail/${i.id}`)}
                                >
                                    {i.name} {i.surname}
                                </button>
                            </li>)
                    }
                </ul>


                <div style={{height: "100px"}} />

                <UserForm />
            </aside>
        </>
    );
}

export default UserList;