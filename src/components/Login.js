import React from 'react';
import {  Redirect } from 'react-router-dom';

export class Login extends React.Component {

    constructor(props) {
        super(props);
        //log the user out whenever this component's route is visited
        this.props.logout();
        this.state = {
            username : "",
            password : ""
        }
    }

    handleChange = (e) => this.setState({ [e.target.name] : e.target.value })

    submitLoginForm = (e) => {
        e.preventDefault()
        const {username, password} = this.state
        this.props.login({username, password})
    }

    render() {
        const {loggingIn, loggedIn, alertReducer} = this.props;
        if(loggedIn) {
            return <Redirect to = '/'/>
        }
        return(
            <div id = "login" className = "">
                <div className = "form-wrapper">
                    <form onSubmit={this.submitLoginForm}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" required = "required" value={this.state.username} onChange = {(e) => this.handleChange(e)} className="form-control" id="username" name="username" placeholder="Enter username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" required = "required" value={this.state.password} onChange = {(e) => this.handleChange(e)} className="form-control" id="password" name = "password" placeholder="Enter password"/>
                        </div>
                        {
                            alertReducer.message &&
                                <div className = "form-group alert-message">
                                    {alertReducer.message}
                                </div>
                        }
                        <div className = "text-center">
                            {/* If the user is being logged in then the button should be disabled */}
                            <button type="submit" className="btn btn-primary" disabled = {loggingIn}>
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}