import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Button, withStyles} from '@material-ui/core';
import {Menu} from '@material-ui/icons';

class NavBar extends React.Component {
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
        </Toolbar>
      </AppBar>
    )
  }
}

export default NavBar;
