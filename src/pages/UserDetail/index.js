import React from 'react';
import Header from '../../components/Header';
import { users } from '../../data';
import { useParams } from 'react-router-dom';

const UserDetail = () => {

    const { name } = useParams();
    const user = users.filter(f => f.name === name)[0];

    return(
        <>
        <Header title="User Detail" />
        <div className="user-detail">
            <b>Name: </b> {user.name} {user.surname} <br/>
            <b>Title: </b> {user.title} <br/>
            <b>City: </b> {user.city} <br/>
        </div>
        </>
    );
}

export default UserDetail;