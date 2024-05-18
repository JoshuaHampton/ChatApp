import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import BioSect from "./assets/BioSect";
import ImageGen from "./assets/ImageGen";
import Chat from "./assets/Chat";

function Layout() {

  return (
    <>
      <Grid container component="main" sx={{ backgroundColor: (t) =>
              t.palette.mode === "dark"
                ? t.palette.grey[50]
                : t.palette.grey[900], 
                color: "grey",
                textAlign: "center"}}>
        <ImageGen height="97vh"/>
        <Grid item xs={12} sm={4} md={5} component={Paper} elevation={6} square>
          <Chat />
        </Grid>
        <Container component="footer" sx={{ height: "3vh"}}>
          <BioSect/>
        </Container>
      </Grid>
    </>
  );
}

export default Layout;
