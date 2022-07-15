import { Stack } from "@mui/material";
import React from "react";
import { CardContainer, Navbar } from "../components";

const Burgars = () => {
  return (
    <Stack spacing={2}>
      <Navbar />
      <CardContainer />
    </Stack>
  );
};

export default Burgars;
