import React from 'react';
import {Login} from './../components/Login';

import { connect } from 'react-redux';
import { loginRequest, loginSuccessful, loginFailure, error, userLogout } from '../_actions/redux.actions';

import dummyAPICall from './../_helpers/dummyAPICall';

const LoginContainer = (props) => <Login {...props}/>

const mapStateToProps = (store) => {
    const {loggingIn, loggedIn} = store.authenticationReducer;
    const {alertReducer} = store
    return {
        loggingIn, loggedIn, alertReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login : function(data) {
            dispatch(loginRequest());
            //mimic the api calling using setTimout
            setTimeout(() => { 
                dummyAPICall(data)
                .then(response => {
                    // console.log('in then for dummyAPICall------------------------------')
                    // console.log(response)
                    this.loginsuccessful(response)
                })
                .catch(errorObj => {
                    // console.log('in catch for dummyAPICall------------------------------')
                    // console.log(errorObj)
                    this.loginFailure(errorObj.errorMessage)
                })
            } , 2000)
        },
        loginFailure : function(message) {
            dispatch(error(message));
            dispatch(loginFailure());
        },
        loginsuccessful : function(userObj) {
            dispatch(loginSuccessful(userObj));
        },
        logout : function() {
            dispatch(userLogout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)