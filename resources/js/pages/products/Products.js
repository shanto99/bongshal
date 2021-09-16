import React from "react";
import {Box, Grid, withStyles} from "@material-ui/core";

import {getProducts} from "../../backend/product";
import Product from "../../components/product/Product";

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        getProducts().then(res => {
            console.log(res);
            this.setState({
                products: res
            })
        })
    }

    render() {
        const products = this.state.products;
        return (
            <Box width="100" p={2}>
                <Grid container spacing={2}>
                    {products.map((product, index) => (
                        <Grid item lg={2} md={6} sm={6} xs={12} key={index}>
                            <Product key={index} product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }
}

export default Products;
