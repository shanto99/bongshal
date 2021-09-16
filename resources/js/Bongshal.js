import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import {CssBaseline, withStyles} from '@material-ui/core';
import {Provider, connect} from "react-redux";
import { LOG_IN, LOG_OUT } from "./actions/authActions";

import App from "./Layouts/App";
import Admin from './Layouts/Admin';
import ReactDOM from "react-dom";

import store from "./store";

import BongshalLoader from "./components/loader/Loader";
import Login from "./pages/login/Login";

import {getUser} from "./backend/authentication";

class Bongshal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    componentDidMount()
    {
        getUser().then(res => {
            let user = res.user;
            this.props.logIn(user);

            this.setState({
                isLoading: false
            });
        }).catch(err => {
            this.setState({
                isLoading: false
            });
            console.log("Not authenticated");
        })
    }

    render() {
        return (this.state.isLoading
            ? <BongshalLoader/>
            : <React.Fragment>
                <CssBaseline/>
                <Router>
                    <Switch>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/admin">
                            <Admin/>
                        </Route>
                        <Route path="/">
                            <App/>
                        </Route>
                    </Switch>
                </Router>
            </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        authState: state.authReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (user) => dispatch({ type: LOG_IN, payload: {user: user} })
    }
}

Bongshal = connect(mapStateToProps, mapDispatchToProps)(Bongshal);

export default Bongshal;

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <Bongshal />
        </Provider>,
        document.getElementById('app'));
}
