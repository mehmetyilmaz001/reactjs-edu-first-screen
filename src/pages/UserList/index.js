import React from 'react';
import { users } from '../../data';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const UserList = () => {

    let history = useHistory();

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch({
            type: "SET_PAGE_TITLE",
            payload: "User List"
        });
    }, []);

    return (
        <>
            <aside>
                <ul>
                    {
                        users.map(i =>
                            <li>
                                <button 
                                    onClick={() => history.push(`user-detail/${i.name}`)}
                                >
                                    {i.name} {i.surname}
                                </button>
                            </li>)
                    }
                </ul>
            </aside>
        </>
    );
}

export default UserList;