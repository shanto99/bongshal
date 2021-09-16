import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Button, withStyles} from '@material-ui/core';
import {Menu} from '@material-ui/icons';

class NavBar extends React.Component {
    render()
    {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">
                        Bongshal admin
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavBar;
