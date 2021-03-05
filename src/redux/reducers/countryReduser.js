import {GET_BY_COUNTRY,GET_BY_LANG,SHOW_CONTENT} from "../actions/const";

const initialState = {
    fetchedItems : [{
        title : '',
        imageUrl : '',
        description: '',
        content: '',
        pubDate: '',
        url : '',
        country: "",
        language: '',
        showcontent: false,
        id : ''
    }]


}

export const countryReducer = (state = initialState,action ) => {

    switch (action.type) {
        case GET_BY_LANG:
            return   { ...state, fetchedItems :action.payload }
        case GET_BY_COUNTRY :
            return   { ...state, fetchedItems :action.payload }
        default: return  state;
    }
}

