import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import burgarDetails from "../constant/BurgarApi";

const BurgarCards = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          md: "repeat(auto-fit, minmax(345px , 1fr))",
          xs: "repeat(auto-fit, minmax(270px , 1fr))",
        },
        gap: 2,
      }}
    >
      {burgarDetails.map(
        ({ id, burgarName, burgarImg, price, delivaryTime, rating }) => (
          <Card key={id}>
            <CardMedia
              component="img"
              height="180"
              image={burgarImg}
              alt={burgarName}
            />
            <CardContent>
              <Typography variant="h5" component="div">
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
              <Rating precision={0.5} defaultValue={rating} readOnly />
              <CardActions sx={{ p: 0, pt: 1 }}>
                <Button size="medium" variant="contained">
                  ADD TO CART
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        )
      )}
    </Box>
  );
};

export default BurgarCards;
