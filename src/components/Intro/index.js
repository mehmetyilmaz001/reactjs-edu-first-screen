import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../util';

const Intro = ({onLoad}) => {

    const dispatch = useDispatch();
    
    // Restore token from storage to global state
    useEffect(() => {
        (async() => {
            const user = await getUser();
            
            dispatch({
                type: "SET_AUTH_USER",
                payload: user
            })

            onLoad(true);

        })();
    }, []);

    return ( 
        <>
            First Screen App...
        </>
     );
}
 
export default Intro;