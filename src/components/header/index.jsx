import { AppBar, Toolbar, Typography, IconButton, Button, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";

import "./header.scss";
export default function Header(props) {
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
                    <Button color="inherit" style={{marginLeft:"auto"}}>Login</Button>
                </Toolbar>
            </AppBar>
            </Box>
        </header>
    );
}
