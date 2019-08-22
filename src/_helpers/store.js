import {createStore, combineReducers, applyMiddleware} from 'redux';
import {loadState} from './localStorage';
import  logger   from 'redux-logger';

import {alertReducer} from './../_reducers/alert.reducer';
import {authenticationReducer} from './../_reducers/auth.reducer';
import {selectionsReducer} from './../_reducers/selections.reducer';
import { USER_LOGOUT } from '../_constants/redux.contants';

const appReducer = combineReducers({
    alertReducer, authenticationReducer, selectionsReducer
})

const rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
      state = undefined;
      //console.log('User Logout in root reducer');
    }
    //whenever USER_LOGOUT fires, all reducers will be initialized anew
    return appReducer(state, action);
}

//retrieve the state (if any) on every reload
const persistedStore = loadState();
//console.log('persistedStore : ', persistedStore)

const store = createStore(
    rootReducer,
    persistedStore,
    applyMiddleware(
        //logger
    )
)

export default store;