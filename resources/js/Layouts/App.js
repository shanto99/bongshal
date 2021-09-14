import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {CssBaseline, withStyles} from '@material-ui/core';

import NavBar from '../includes/NavBar';
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import Products from "../pages/products/Product";

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
                        <Router>
                            <Switch>
                                <Route path="/products">
                                    <Products/>
                                </Route>
                                <Route path="/">
                                    <Home/>
                                </Route>
                            </Switch>
                        </Router>
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
