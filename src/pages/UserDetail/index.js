import React from 'react';

const UserDetail = (props) => {

    const { user } = props;

    return(
        <div className="user-detail">
            <b>Name: </b> {user.name} {user.surname} <br/>
            <b>Title: </b> {user.title} <br/>
            <b>City: </b> {user.city} <br/>
        </div>
    );
}

export default UserDetail;