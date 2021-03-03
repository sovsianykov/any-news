import {GET_BY_COUNTRY,GET_BY_LANG} from "../actions/const";

const initialState = {
    fetchedItems : [{title: ''}]


}

export const countryReducer = (state = initialState,action ) => {

    switch (action.type) {
        case GET_BY_LANG:
            return   { ...state, posts: state.posts.concat([action.payload]) }
        case GET_BY_COUNTRY :
            return   { ...state, fetchedItems :action.payload }
        default: return  state;
    }
}

