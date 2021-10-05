import { connect } from "react-redux";
import { Card, CardActions, CardContent, Button, Typography, CardMedia, Paper } from "@mui/material";
import "./cartPopup.scss";

import { incrementItem } from "../../store/cart/actions/increment";
import { decrementItem } from "../../store/cart/actions/decrement";
import { removeItem } from "../../store/cart/actions/remove";

const CartPopup = (props) => {
    return (
        <div style={{ transition: "0.5s", opacity: props.cart.length > 0 ? 1 : 0 }} className="cartPopupContainer">
            <Paper elevation="2" className="paperDiv">
                <div className="cartPopupContainerVV">
                    {props.cart.map((product) => {
                        return (
                            <div className="cartPopupProduct" key={product.id}>
                                <div>
                                    <img src={product.image} />
                                </div>
                                <div>
                                    <h3>{product.name}</h3>
                                    <h6>{product.brand}</h6>
                                    <div className="cartPopupCounterAndPriceContainer">
                                        <div className="cartPopupCountControl">
                                            <div onClick={() => props.decrementItem(product)}>
                                                <span>-</span>
                                            </div>
                                            <div>
                                                <span>{product.count}</span>
                                            </div>
                                            <div onClick={() => props.incrementItem(product)}>
                                                <span>+</span>
                                            </div>
                                        </div>
                                        <div className="cartPopupPrice">${product.price}</div>
                                        <div onClick={() => props.removeItem(product)} className="cartPopupReset">
                                            <div>x</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Paper>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cart: state.cart,
});
const mapDispatchToProps = { incrementItem, decrementItem, removeItem };

export default connect(mapStateToProps, mapDispatchToProps)(CartPopup);
