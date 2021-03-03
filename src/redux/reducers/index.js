import {combineReducers} from 'redux';
import filterReducer from './filterReduser';
import {countryReducer} from './countryReduser';
import langReducer from './langReduser';


export const rootReducer = combineReducers({

    newsFt :  countryReducer

})

