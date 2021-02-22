import api from '../..';
import { trackPromise } from 'react-promise-tracker';

export const startSession = (request) => {

    let data = api.post('/client/disc/session/start', request)
        .then(response => response.data)
        .catch(error => error.response)

        trackPromise(data);

    return data;
}

export const getSession = (token) => {
    let data = api.get('/client/respondent/session/' + token)
        .then(response => response.data)
        .catch(error => error.response)

    trackPromise(data);

    return data;
}

export const finishSession = (request) => {
    let data = api.post('/client/disc/session/finish', request)
        .then(response => response.data)
        .catch(error => error.response)

    trackPromise(data);

    return data;
}