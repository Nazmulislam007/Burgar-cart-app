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
  const {} = useCart();
  const [value, setValue] = useState(0);
  const [sortValue, setSortValue] = useState("");
  const label1 = { inputProps: { "aria-label": "checkbox-demo" } };

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
          onChange={() => setSortValue("Ascending")}
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
          onChange={() => setSortValue("Descending")}
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
        <Checkbox {...label1} />
        <ListItemText primary="Include Out of Stock" />
      </List>
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <Checkbox {...label1} />
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
