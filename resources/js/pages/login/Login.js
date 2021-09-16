import React from "react";
import {Container, Avatar, Typography, Box, TextField, Checkbox,
    FormControlLabel, Button, Grid, Link } from "@material-ui/core";

import {connect} from "react-redux";

import {LockOutlined} from "@material-ui/icons";
import {LOG_IN} from "../../actions/authActions";

import {login} from "../../backend/authentication";
import {Redirect} from "react-router-dom";

function Copyright(props) {
    return (
        <Typography variant="body2" color="secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Bongshal
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e)
    {
        e.preventDefault();
        let {email, password} = this.state;
        login(email, password).then(res => {
            this.props.logIn(res.user);
        })
    }
    render() {
        return (
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar>
                        <LockOutlined color="secondary" />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={this.state.email}
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => this.setState({email: e.target.value})}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={this.state.password}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={(e) => this.setState({password: e.target.value})}
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
                {this.props.authState.loggedIn
                ? <Redirect to="/" />
                : null }
            </Container>
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
        logIn: (user=null) => dispatch({ type: LOG_IN, payload: {user: user} })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
