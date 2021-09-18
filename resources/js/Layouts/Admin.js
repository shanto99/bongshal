import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Grid} from "@material-ui/core";
import NavBar from "../includes/admin/navbar/Navbar";
import Sidebar from "../includes/admin/sidebar/Sidebar";
import Vendors from "../pages/admin/vendors/Vendors";
import Categories from "../pages/admin/categories/Categories";
import {LOG_IN} from "../actions/authActions";

import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Admin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Grid container>
                    <Grid item lg={2}>
                        <Sidebar/>
                    </Grid>
                    <Grid item lg={10}>
                        <Router basename="admin">
                            <Switch>
                                <Route path="/categories">
                                    <Categories/>
                                </Route>
                                <Route path="/">
                                    <Vendors/>
                                </Route>
                            </Switch>
                        </Router>
                    </Grid>
                </Grid>
                {
                    !this.props.authState.loggedIn
                    ? <Redirect to="/login" />
                      : null
                }
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        authState: state.authReducer
    };
}

export default connect(mapStateToProps, null)(Admin);
