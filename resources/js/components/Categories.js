import React from "react";
import {Link} from "react-router-dom";
import {Box, Container, Grid, Typography} from "@material-ui/core";

class Categories extends React.Component {
    render() {
        return (
            <Box maxWidth="md" textAlign="center" marginTop={5}>
                <Typography variant="h5">
                    Out product categories
                </Typography>
                <Box display="flex" justifyContent="center" padding={3}>
                    <Grid container spacing={2}>
                        <Grid item lg={4} sm={6} xs={12}>
                            <Link to="/products">
                                <Box width="100" border={2} paddingY={3}>
                                    Category one
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12}>
                            <Link to="/products">
                                <Box width="100" border={2} paddingY={3}>
                                    Category one
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12}>
                            <Link to="/products">
                                <Box width="100" border={2} paddingY={3}>
                                    Category one
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12}>
                            <Link to="/products">
                                <Box width="100" border={2} paddingY={3}>
                                    Category one
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12}>
                            <Link to="/products">
                                <Box width="100" border={2} paddingY={3}>
                                    Category one
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12}>
                            <Link to="/products">
                                <Box width="100" border={2} paddingY={3}>
                                    Category one
                                </Box>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        );
    }
}

export default Categories;
