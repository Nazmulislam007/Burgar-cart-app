import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { Navbar } from "../components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useCart } from "../context/ProductContext";

const Cart = () => {
  const { incriment, totalAmounts, decriment, cart } = useCart();
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
            {cart.map(
              ({ id, burgarName, burgarImg, qty, price, delivaryTime }) => (
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
                        onClick={() => decriment(id)}
                      >
                        <RemoveIcon />
                      </Button>
                      <div className="count">{qty}</div>
                      <Button
                        sx={{
                          minWidth: "35px",
                        }}
                        color="inherit"
                        onClick={() => incriment(id)}
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
              )
            )}
          </Stack>
        </Scrollbars>
      </Box>
      <Stack
        sx={{ ml: "auto !important" }}
        direction="row"
        alignItems="flex-start"
        spacing={2}
      >
        <Typography>Total Price : ৳ {totalAmounts}</Typography>
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
