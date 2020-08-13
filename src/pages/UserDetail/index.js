import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUserDetail } from '../../state/actions/users';

const UserDetail = () => {

    const { id } = useParams();

    const user = useSelector(s => s.users.userDetail);
    const loading = useSelector(s => s.users.loading);


    const dispatch = useDispatch();


    const _deleteUser = (id) => {
        dispatch(deleteUser(id))
    }


    React.useEffect(() => {
        console.log("mount id", id)
        dispatch(getUserDetail(id))
    }, [])

    React.useEffect(() => {
        dispatch({
            type: "SET_PAGE_TITLE",
            payload: "title"
        });


    }, []);


    if (loading) {
        return <>Yükleniyor...</>
    }


    return user && (
        <>
        <div className="user-detail">
            <b>Name: </b> {user.name} {user.surname} <br/>
            <b>Title: </b> {user.title} <br/>
            <b>City: </b> {user.city} <br/>
        </div>
        <br />
        <br />
        <button onClick={() => _deleteUser(user.id)}>
            Sil
        </button>


        </>
    );
}

export default UserDetail;