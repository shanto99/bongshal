import React from "react";
import {Box, List, ListItem, ListItemIcon, ListItemText, withStyles} from "@material-ui/core";
import {Store, Category} from "@material-ui/icons";

import styles from "./styles";

class Sidebar extends React.Component {
  render()
  {
      const classes = this.props.classes;
    return (
      <Box width="100" className={classes.sidebar}>
          <List>
              <ListItem button>
                  <ListItemIcon>
                      <Category/>
                  </ListItemIcon>
                  <ListItemText primary="Categories"/>
              </ListItem>
              <ListItem button>
                  <ListItemIcon>
                      <Store/>
                  </ListItemIcon>
                  <ListItemText primary="Vendors" />
              </ListItem>
              <ListItem button>
                  <ListItemIcon>
                      <Store/>
                  </ListItemIcon>
                  <ListItemText primary="Add new vendor" />
              </ListItem>
          </List>
      </Box>
    )
  }
}

export default withStyles(styles)(Sidebar);
