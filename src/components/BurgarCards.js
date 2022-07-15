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
import { Scrollbars } from "react-custom-scrollbars-2";
import burgarDetails from "../constant/BurgarApi";

const BurgarCards = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 82px)",
      }}
    >
      <Scrollbars>
        <div className="card__container">
          {burgarDetails.map(
            ({ id, burgarName, burgarImg, price, delivaryTime, rating }) => (
              <Card key={id} sx={{ height: "max-content" }}>
                <CardMedia
                  component="img"
                  height="200"
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
        </div>
      </Scrollbars>
    </Box>
  );
};

export default BurgarCards;
