import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Stack spacing={2} direction="row">
      <Link to="/burgers">Burgers</Link>
      <Link to="/burgers-carts">Carts</Link>
    </Stack>
  );
};

export default Home;
