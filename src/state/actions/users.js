import service from '../../service';
import parser from 'firestore-parser';


const getIdFromName = (name) => {
    const splittedName = name.split("/");
    const id = splittedName[splittedName.length - 1];
    return id;
}

const mapUser = (data) => {
    return {
        id: getIdFromName(data.name),
        name: data.fields.name,
        surname: data.fields.surname,
        city: data.fields.city
    }
}

const parseAndMapUser = (data) => {
    const parsedData = parser(data);
    return mapUser(parsedData)
}

export const getUsers = () => {
    return dispatch => {
        dispatch({
            type: "FETCH_USER_REQUEST"
        });

        service.get(`users`).then(res => {

            if (Object.keys(res.data).length > 0) {
                const parsedData = parser(res.data);
                const list = parsedData.documents.map(i => {
                    return mapUser(i);
                });

                dispatch({
                    type: "FETCH_USER_SUCCESS",
                    payload: list
                });
                console.log("get users => ", parsedData, list);
            } else {
                dispatch({
                    type: "FETCH_USER_FAIL",
                    payload: "Kullanıcı bulunamadı!"
                });
            }
        })

    }
}

export const deleteUser = (id) => {
    return dispatch => {
        dispatch({
            type: "DELETE_USER_REQUEST"
        });

        service.delete(`users/${id}`).then(res => {
            dispatch({
                type: "DELETE_USER_SUCCESS",
            });
        }).catch(err => {
            console.log("del user => ", err);
        })

    }
}

export const getUserDetail = (id) => {
    return dispatch => {
        dispatch({
            type: "FETCH_USER_DETAIL_REQUEST"
        });

        service.get(`users/${id}`).then(res => {
            dispatch({
                type: "FETCH_USER_DETAIL_SUCCESS",
                payload: parseAndMapUser(res.data)
            });
        }).catch(err => {
            console.log("del user => ", err);
        })

    }
}

export const insertUser = (user) => {
    return dispatch => {
        dispatch({
            type: "POST_USER_REQUEST"
        });

        service.post(`users`, {
            fields: {
                name: { stringValue: user.name },
                surname: { stringValue: user.surname },
                city: { stringValue: user.city },
            }
        }).then(res => {
            console.log("insert user ", parser(res.data))
            dispatch({
                type: "POST_USER_SUCCESS",
                payload: parseAndMapUser(res.data)
            });
        }).catch(err => {
            console.log("del user => ", err);
            dispatch({
                type: "POST_USER_FAIL",
                payload: "Hata oluştu!"
            });
        })

    }
}