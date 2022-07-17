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
// import burgarDetails from "../constant/BurgarApi";
import { useCart } from "../context/ProductContext";

const BurgarCards = () => {
  const { products, addToCart } = useCart();
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 82px)",
      }}
    >
      <Scrollbars>
        <div className="card__container">
          {products.map((prod) => (
            <Card key={prod.id} sx={{ height: "max-content" }}>
              <CardMedia
                component="img"
                height="200"
                image={prod.burgarImg}
                alt={prod.burgarName}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {prod.burgarName}
                </Typography>
                <Typography variant="subtitle1" color="GrayText">
                  ৳ {prod.price}
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  color="text.secondary"
                >
                  {prod.delivaryTime} hours delivery
                </Typography>
                <Rating precision={0.5} defaultValue={prod.rating} readOnly />
                <CardActions sx={{ p: 0, pt: 1 }}>
                  <Button
                    size="medium"
                    onClick={() => addToCart(prod)}
                    variant="contained"
                  >
                    ADD TO CART
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </div>
      </Scrollbars>
    </Box>
  );
};

export default BurgarCards;
