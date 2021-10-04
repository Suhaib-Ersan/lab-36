import { AppBar, Toolbar, Typography, Container, Button, Box } from "@mui/material";


import "./footer.scss";
export default function Footer(props) {
    return <footer>
         <AppBar position="static" color="primary">
            <Toolbar style={{justifyContent:"center"}}>
              <Typography variant="body1" color="inherit" >
                © 2021 ASAC
              </Typography>
            </Toolbar>
        </AppBar>
    </footer>;
}
