import React from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
} from "@mui/material";

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid items md={6}>
          <img src={"../images/dog.jpeg"} alt="doggy" className="logoImg"></img>
        </Grid>
        <Grid items md={6}>
          <h1 className="introText">
            Your One Stop App For All Things Pet Related
          </h1>
        </Grid>
        <Grid items md={6}>
          About us
        </Grid>
        <Grid items md={6}>
          <img
            src={"../images/turtle.jpeg"}
            alt="doggy"
            className="logoImg"
          ></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
