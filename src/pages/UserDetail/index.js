import React from 'react';
import { users } from '../../data';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const UserDetail = () => {

    const { name } = useParams();
    const user = users.filter(f => f.name === name)[0];

    const [ title, setTitle ] = React.useState(`User Detail ${user.name}`);


    const dispatch = useDispatch();
    
    React.useEffect(() => {
        dispatch({
            type: "SET_PAGE_TITLE",
            payload: title
        });

        
    }, [title]);

    React.useEffect(() => {
        return () => {
            alert("Detay sayfadan çıkıldı")
        }
    }, []);


    return(
        <>
        <div className="user-detail">
            <b>Name: </b> {user.name} {user.surname} <br/>
            <b>Title: </b> {user.title} <br/>
            <b>City: </b> {user.city} <br/>
        </div>
        <br />
        <br />
        <button onClick={() => setTitle("Title değişti")}>
            Title'ı değiştir
        </button>

        <button onClick={() => setTitle(`User Detail ${user.name}`)}>
            Title'ı eski haline geri getir
        </button>
        </>
    );
}

export default UserDetail;