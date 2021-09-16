import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Button, withStyles} from '@material-ui/core';
import {Menu} from '@material-ui/icons';

import {connect} from "react-redux";

import {logout} from "../backend/authentication";
import {LOG_IN, LOG_OUT} from "../actions/authActions";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.makeLogout = this.makeLogout.bind(this);
    }

    makeLogout()
    {
      logout().then(res => {
        this.props.logOut();
      });
    }

  render()
  {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={this.props.toggleDrawer}
           color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">
            Bongshal
          </Typography>
            {this.props.authState.loggedIn
            ? <Typography onClick={this.makeLogout}>Logout</Typography>
            : <Typography>Login</Typography>}
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        authState: state.authReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch({ type: LOG_OUT})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
