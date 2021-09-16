import { Box, Typography, Button, withStyles } from "@material-ui/core";
import React from "react";

import {shortString} from "../../Utilities";
import styles from "./styles";

class Product extends React.Component {
  render()
  {
    const classes = this.props.classes;
    const {image, title, price} = this.props.product;
    return (
      <Box className={classes.productCard}>
        <div className={classes.productImageContainer}>
          <img alt="Product image" src={image} className={classes.productImg}/>
        </div>
        <div className={classes.productCardFooter}>
          <div>
            <Typography variant="label">
                {shortString(title)}
            </Typography>
          </div>
          <div>
            <Typography variant="label">
              Each
            </Typography>
          </div>
            <div>
                <Typography variant="label">
                    {price}
                </Typography>
            </div>
          <div>
            <Button variant="contained" color="secondary">
              Add to cart
            </Button>
          </div>
        </div>
      </Box>
    )
  }
}

export default withStyles(styles)(Product);
