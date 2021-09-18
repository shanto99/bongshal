import React from "react";
import {Box, Button, Container, Grid, List, FormControl, InputLabel, Select, MenuItem,
    ListItem, ListItemIcon, ListItemText, TextField, withStyles} from "@material-ui/core";

import {createCategory, getCategories} from "../../../backend/category";
import {Add as AddIcon} from "@material-ui/icons";

import styles from "./styles";

class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            categoryName: ''
        };

        this.saveCategory = this.saveCategory.bind(this);
        this.handleParentCategoryChange = this.handleParentCategoryChange.bind(this);
    }

    componentDidMount() {
        getCategories().then(res => {
            let categories = res.categories || [];
            this.setState({
               categories: categories
            });
        })
    }

    handleParentCategoryChange(e)
    {

    }

    saveCategory()
    {
        let {categoryName} = this.state;
        createCategory(categoryName).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        const classes = this.props.classes;
        return (
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item lg={6} md={12} sm={12}>
                        <Box>
                            <List>
                                {this.state.categories.map(category => (
                                    <ListItem button key={category.id}>
                                        <ListItemIcon>
                                            <AddIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={category.category_name} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={12} sm={12}>
                        <Box width="100">
                            <FormControl className={classes.formControl}>
                                <TextField fullWidth required
                                           type="text" margin="normal"
                                           value={this.state.categoryName}
                                           label="Category"
                                           onChange={(e) => this.setState({ categoryName: e.target.value })}
                                />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Parent category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    onChange={this.handleParentCategoryChange}
                                >
                                    {this.state.categories.map(category => (
                                        <MenuItem key={category.id} value={category.id}>{category.category_name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={this.saveCategory}
                                >
                                    Create
                                </Button>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default withStyles(styles)(Categories);
