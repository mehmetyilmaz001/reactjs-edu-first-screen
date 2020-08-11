import React from 'react';
import { users } from '../../data';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const UserDetail = () => {

    const { name } = useParams();
    const user = users.filter(f => f.name === name)[0];

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch({
            type: "SET_PAGE_TITLE",
            payload: `User Detail ${user.name}`
        });
        // eslint-disable-next-line
    }, []);

    return(
        <>
        <div className="user-detail">
            <b>Name: </b> {user.name} {user.surname} <br/>
            <b>Title: </b> {user.title} <br/>
            <b>City: </b> {user.city} <br/>
        </div>
        </>
    );
}

export default UserDetail;