import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { Navbar } from "../components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import burgarDetails from "../constant/BurgarApi";
import { Scrollbars } from "react-custom-scrollbars-2";

const Cart = () => {
  return (
    <Stack spacing={2}>
      <Navbar />
      <Box
        maxWidth={{ sm: 550, xs: "90%" }}
        sx={{
          width: "100%",
          height: "70vh",
          mx: "auto !important",
        }}
      >
        <Scrollbars>
          <Stack direction="column" spacing={1}>
            {burgarDetails
              .slice(0, 5)
              .map(({ id, burgarName, burgarImg, price, delivaryTime }) => (
                <Card key={id}>
                  <Stack
                    direction={{ sm: "row", xs: "column" }}
                    spacing={{ sm: 3, xs: 1 }}
                    alignItems="center"
                  >
                    <img
                      width="200"
                      height="120"
                      src={burgarImg}
                      alt="barger"
                    />
                    <Stack>
                      <Typography variant="subtitle1" component="div">
                        {burgarName}
                      </Typography>
                      <Typography variant="subtitle1" color="GrayText">
                        ৳ {price}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        color="text.secondary"
                      >
                        {delivaryTime} hours delivery
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing="1">
                      <Button
                        sx={{
                          minWidth: "35px",
                        }}
                        color="inherit"
                      >
                        <RemoveIcon />
                      </Button>
                      <div className="count">1</div>
                      <Button
                        sx={{
                          minWidth: "35px",
                        }}
                        color="inherit"
                      >
                        <AddIcon />
                      </Button>
                    </Stack>
                    <DeleteIcon
                      sx={{
                        ml: "1.5rem",
                        cursor: "pointer",
                      }}
                      color="error"
                    />
                  </Stack>
                </Card>
              ))}
          </Stack>
        </Scrollbars>
      </Box>
      <Stack
        sx={{ ml: "auto !important" }}
        direction="row"
        alignItems="flex-start"
        spacing={2}
      >
        <Typography>Total Price : ৳ 12000</Typography>
        <Stack spacing={2}>
          <Button variant="contained" color="error">
            Clear All
          </Button>
          <Button variant="contained" color="success">
            Check Out
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Cart;
