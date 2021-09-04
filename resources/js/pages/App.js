import React from 'react';
import ReactDOM from 'react-dom';
import {CssBaseline, withStyles} from '@material-ui/core';

import NavBar from '../includes/NavBar';
import Banner from "../components/Banner";
import Sidebar from "../components/Sidebar";

const styles = theme => ({
    siteBody: {
        display: 'flex',
        position: 'relative'
    },
    mainContent: {
        flex: 1
    }
});

class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            drawerOpen: true
        }

        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer()
    {
        this.setState(prevState => {
            return {...prevState, drawerOpen: !prevState.drawerOpen}
        });
    }

    render()
    {
        const classes = this.props.classes;
        return (
            <React.Fragment>
                <CssBaseline/>
                <NavBar toggleDrawer={this.toggleDrawer}/>
                <div className={classes.siteBody}>
                    <Sidebar drawerOpen={this.state.drawerOpen}/>
                    <div className={classes.mainContent}>
                        <Banner/>
                    </div>  
                </div>
            </React.Fragment>
            )
    }
}

App = withStyles(styles)(App);

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
