import { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import BioSect from "./assets/BioSect";
import ImageGen from "./assets/ImageGen";



function Layout() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline/>
      <Grid container component="main">
        <ImageGen height="97vh" xs="false" sm="8" md="7"/>
        <Grid item xs={12} sm={4} md={5} component={Paper} elevation={6} square>
          <Container component="controls">
            <h1>Vite + React</h1>
            <div>
              <Button
                variant="contained"
                onClick={() => setCount((count) => count + 1)}
              >
                count is {count}
              </Button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p>Click on the Vite and React logos to learn more</p>
          </Container>
        </Grid>
        <Container component="footer" sx={{ height: "3vh",backgroundColor: (t) =>
              t.palette.mode === "dark"
                ? t.palette.grey[50]
                : t.palette.grey[900], 
                color: "grey",
                textAlign: "center"}}>
          <BioSect/>
        </Container>
      </Grid>
    </>
  );
}

export default Layout;
