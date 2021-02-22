import api from '../..';
import { trackPromise } from 'react-promise-tracker';

export const getQuestions = () => {

    let data = api.get('/client/disc/questions')
        .then(response => response.data)
        .catch(error => error.response)

    trackPromise(data);

    return data;
}