import { connect } from "react-redux";
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Modal } from "@mui/material";
import { Menu } from "@mui/icons-material";

import { useState } from "react";

import "./header.scss";
const Header = (props) => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "none",
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" component="div">
                            News
                        </Typography>
                        <Button onClick={handleOpen} color="inherit" style={{ marginLeft: "auto" }}>
                            Cart ({props.cart.length})
                        </Button>
                        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                            <Box sx={style}>
                                <Typography variant="h6" component="h2">
                                    Checkout
                                </Typography>
                                <Typography variant="h7">Your cart</Typography>
                                <div className="cartItemAndPriceContainer">
                                    <Typography className="cartItemAndPrice" sx={{ mt: 2 }}>
                                        {props.cart.map((item) => {
                                            return (
                                                <div>
                                                    <div>{item.name}</div>
                                                    <div>
                                                        ${item.price}
                                                        <small> x{item.count}</small>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </Typography>
                                    <div className="cartItemAndPriceFinalPrice">
                                        <Typography sx={{ mt: 2 }}>
                                            <div>Total</div>
                                            <div>
                                                {" "}
                                                $
                                                {props.cart.reduce((acc, item) => {
                                                    return acc + parseInt(item.price) * parseInt(item.count);
                                                }, 0)}
                                            </div>
                                        </Typography>
                                    </div>
                                </div>
                                    <div style={{display:"flex"}} >
                                <Button style={{ marginLeft: "auto", marginRight: "auto" }}>
                                    Checkout
                                </Button>
                                </div>
                            </Box>
                        </Modal>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
};

const mapStateToProps = (state) => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(Header);
