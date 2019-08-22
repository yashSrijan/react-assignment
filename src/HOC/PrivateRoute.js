import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const PrivateRoute = ({ component : Component, path, ...rest }) => {

    //console.log(rest)
    //computedMatch, exact, location, user
    if(rest.user !== null) {
        //if the user object is there, then render the component designated for this route
        return <Route {...rest} render = { props => <Component {...props} /> } />
    } else {
        //else redirect the to error page
        return <Redirect to = '/login'/>
    }
    
};

const mapStateToProps = (store) => {
    return {
        user : store.authenticationReducer.user
    }
}

const connectedComponent = connect(mapStateToProps, {})(PrivateRoute);
export { connectedComponent as PrivateRoute }; 