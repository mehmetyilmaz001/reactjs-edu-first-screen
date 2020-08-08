import React from 'react';
import Header from '../../components/Header';
import { users } from '../../data';
import { useHistory } from 'react-router-dom'


const UserList = () => {

    let history = useHistory();

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