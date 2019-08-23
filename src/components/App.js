import React from 'react'
import { connect } from 'react-redux'
import {history} from './../_helpers/history'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import {clear} from './../_actions/redux.actions'

import HomeContainer from './../containers/HomeContainer'
import LoginContainer from './../containers/LoginContainer'
import {Error} from './Error'
import {PrivateRoute} from './../HOC/PrivateRoute'

class App extends React.Component {

    constructor(props) {
        super(props);
        history.listen( () => {
            this.props.clear();
        });
        this.props.clear();
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path = {"/"} component={HomeContainer}  />
                        <Route exact path = {"/login"} component={LoginContainer} />
                        <Route path ="/*" component={Error} /> 
                    </Switch>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
       loaderReducer : store.loaderReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        clear : function() {
            dispatch(clear());
        }
    }
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App }; 