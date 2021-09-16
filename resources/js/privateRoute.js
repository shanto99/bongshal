import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect
} from 'react-router-dom';

class PrivateRoute extends React.Component {
  render()
  {
    let {children, ...rest} = this.props;
    return (
      <Route {...rest} 
      render={
        ({ location }) => (
          this.porps.loggedIn
            ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location }
                }}
              />
            ))
      }
      />
    )
  }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    };
}

export default connect(mapStateToProps)(PrivateRoute);