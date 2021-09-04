import { Drawer, List, ListItem, ListItemText, ListItemIcon, withStyles } from "@material-ui/core";
import { Inbox, Mail } from "@material-ui/icons";
import React from "react";

const styles = theme => ({
  sideDrawer: {
    position: 'relative',
    flexShrink: 1,
    width: '240px',
    transition: 'width .5s',
    '& .MuiDrawer-paper': {
      position: 'relative',
      left: '0',
      minHeight: 'calc(100vh - 64px)',
      transition: 'all .5s !important',
    }
  },
  sideDrawerClose: {
    width: '0 !important',
    '& .MuiDrawer-paper': {
      left: '-240px !important',
    }
  }
});

class Sidebar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: true
    }
  }

  componentDidMount()
  {
    
  }

  render()
  {
    const classes = this.props.classes;
    return (
      <Drawer
        variant="persistent"
        open={this.props.drawerOpen}
        anchor="left"
        className={`${classes.sideDrawer} ${!this.props.drawerOpen ? classes.sideDrawerClose : ''}`}
        >
          <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>
    )
  }

}

export default withStyles(styles)(Sidebar);