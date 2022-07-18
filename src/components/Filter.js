import React, { useState } from "react";
import {
  List,
  ListItemText,
  Checkbox,
  Radio,
  Box,
  Rating,
  Typography,
  Button,
} from "@mui/material";
import { useCart } from "../context/ProductContext";

const Filter = () => {
  const { sortdispatch } = useCart();
  const [value, setValue] = useState(0);
  const [sortValue, setSortValue] = useState("");
  const label1 = { inputProps: { "aria-label": "checkbox-demo" } };
  const [check, setCheck] = useState(false);

  const sortAscenFun = () => {
    sortdispatch({
      type: "SORT_BY_PRICE",
      payload: "Ascending",
    });
    setSortValue("Ascending");
  };

  const sortDescenFun = () => {
    sortdispatch({
      type: "SORT_BY_PRICE",
      payload: "Descending",
    });
    setSortValue("Descending");
  };

  const checkBoxChange = () => {
    check ? setCheck(false) : setCheck(true);
    sortdispatch({
      type: "FAST_DELIVERY",
      payload: check,
    });
  };

  return (
    <Box
      sx={{
        maxWidth: { md: "360px", xs: "100%" },
        height: "fit-content",
        width: "100%",
        bgcolor: "whitesmoke",
        boxShadow: 1,
        pl: 2,
        py: 1,
        pb: 3,
      }}
    >
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <Radio
          inputProps={{ "aria-label": "Ascending" }}
          name="radio-button"
          value="Ascending"
          checked={sortValue === "Ascending"}
          onChange={sortAscenFun}
        />
        <ListItemText primary="Ascending" />
      </List>
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <Radio
          inputProps={{ "aria-label": "Descending" }}
          name="radio-button"
          value="Descending"
          checked={sortValue === "Descending"}
          onChange={sortDescenFun}
        />
        <ListItemText primary="Descending" />
      </List>

      <List
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <Checkbox checked={check} onChange={checkBoxChange} {...label1} />
        <ListItemText primary="Fast Delivery Only" />
      </List>

      <List
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: "10px",
          ml: "11px",
        }}
      >
        <Typography>Rating : </Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
        />
      </List>
      <Button variant="contained" sx={{ mt: 1, ml: 1 }}>
        Clear Filter
      </Button>
    </Box>
  );
};

export default Filter;
