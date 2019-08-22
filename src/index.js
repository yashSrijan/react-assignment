import React from 'react';
import ReactDOM from 'react-dom';
import {App} from  './components/App';

import { Provider } from 'react-redux';
import store from './_helpers/store.js';
import {saveState} from './_helpers/localStorage.js';

import './assets/css/styles.css';

//store.subscribe is fired everytime some change is made in the store
store.subscribe(() => {
    let currentState = store.getState();
    //console.log('current state authenticationReducer : ', currentState.authenticationReducer );
    //if the authentication reducer has a value of undefined then there is no need to save anything in the sessionStoprage
    //else the current store should be saved in sessionStorage (so it can be retrieved after reload -- in store.js)
    saveState(currentState.authenticationReducer.user === null ? {} : currentState);
});

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
