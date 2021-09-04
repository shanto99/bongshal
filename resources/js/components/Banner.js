import React from "react";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    banner: {
        height: '33vh',
        width: '100%',
        background: "url('/img/landingBannerTop.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
});

class Banner extends React.Component {
    render() {
        const classes = this.props.classes;
        return (
            <React.Fragment>
                <div className={classes.banner}/>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Banner);
