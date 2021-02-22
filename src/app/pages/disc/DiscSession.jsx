import React, { useEffect, useState } from 'react';
import { startSession } from '../../../api/resources/disc/DicSession';
import { useDispatch } from 'react-redux';
import { setDiscSession } from './redux/actions';
export default function DiscSession(props) {

    const [token, setToken] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        startSession({ token: props.match.params.token }).then(response => {

            if (response.error) return setToken(response.error);

            setToken(response.data.token);
            dispatch({ type: 'SET_DISC_SESSION', payload: response.data });

            // sessionStorage.setItem('clientSession', JSON.stringify(response.data));
        });
    }, [])


    if (token === null) return (<div></div>)
    else {

        if (!token) return <div>{'Token Inválido'}</div>

        return window.location.href = '/disc';
    }
}

