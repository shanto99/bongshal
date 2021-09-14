import React from "react";
import axios from "axios";
import {Box, Grid} from "@material-ui/core";

import {getProducts} from "../../backend/product"

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
                    {products.map(product => (
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box p={3}>
                            <img style={{width:'100%', maxHeight: '300px'}} alt="product image" src={product.image}/>
                                <p>
                                    {product.title}
                                </p>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }
}

export default Products;
