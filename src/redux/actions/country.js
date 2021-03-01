import axios from 'axios'
import {GET_BY_COUNTRY} from './const'





export const fetchNews = () => (dispatch) => {

    axios.get(' https://gnews.io/api/v4/search/?q=jazz&token=c32ec108591e59471e57135a1da11764&lang=ru&music&country=ua').then(({data}) => {
        dispatch(setCountry(data));
    });
}


export  const setCoutry = (items) => ({
    type: GET_BY_COUNTRY,
    payload: items
});

