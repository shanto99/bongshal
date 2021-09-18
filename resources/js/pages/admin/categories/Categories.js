import React from "react";
import {Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, TextField} from "@material-ui/core";

import {createCategory, getCategories} from "../../../backend/category";
import {Add as AddIcon} from "@material-ui/icons";

class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            categoryName: ''
        };

        this.saveCategory = this.saveCategory.bind(this);
    }

    componentDidMount() {
        getCategories().then(res => {
            let categories = res.categories || [];
            this.setState({
               categories: categories
            });
        })
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
                            <TextField fullWidth required
                                       type="text" margin="normal"
                                       value={this.state.categoryName}
                                       label="Category"
                                       onChange={(e) => this.setState({ categoryName: e.target.value })}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                onClick={this.saveCategory}
                            >
                                Create
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Categories;
