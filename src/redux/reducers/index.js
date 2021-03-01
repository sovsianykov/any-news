import {combineReducers} from 'redux';
import filterReducer from './filterReduser';
import countryReducer from './countryReduser';
import langReducer from './langReduser';


const rootReducer = combineReducers({
    filters : filterReducer,
    country :  countryReducer,
    lang : langReducer

})

export default rootReducer;