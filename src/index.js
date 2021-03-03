import React from 'react';
import thunk from 'redux-thunk'
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {rootReducer} from "./redux/reducers/index";

const store = createStore(rootReducer, compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
window.store = store


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
