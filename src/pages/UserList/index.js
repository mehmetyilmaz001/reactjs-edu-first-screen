import React from 'react';
import Header from '../../components/Header';
import { users } from '../../data';

const UserList = (props) => {
    return (
        <>
            <Header title="First Screen Application - Users" />
            <aside>
                <ul>
                    {
                        users.map(i =>
                            <li>
                                <button 
                                    onClick={() => props.onSelectUser(i)}
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