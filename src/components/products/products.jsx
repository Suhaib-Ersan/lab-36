import { connect } from "react-redux";
import { Card, CardActions, CardContent, Button, Typography, CardMedia, Box } from "@mui/material";

import { addItem } from "../../store/cart/actions/add"

import "./products.scss";
const Products = (props) => {
    return (
        <div className="productsContainer">
            <Box sx={{ display: "flex", mt: 3, bgcolor: "background.paper", gap: 2, flexWrap: 'wrap' }}>
                {props.productsArr.data.map((product) => {
                    return (
                        <Card key={product.name} sx={{ minWidth: 300 }}>
                            <CardMedia component="img" height="140" image={product.image} alt={product.name} />
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {props.productsArr.category}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {product.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {product.brand}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => props.addItem(product)} size="small">Add to cart</Button>
                            </CardActions>
                        </Card>
                    );
                })}
            </Box>
        </div>
    );
};

const mapStateToProps = (state) => ({
    productsArr: state.categories.chosenCategory,
});

const mapDispatchToProps = { addItem };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
