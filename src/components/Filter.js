import React, { useState } from "react";
import {
  List,
  ListItemText,
  Checkbox,
  Radio,
  Box,
  Rating,
  Typography,
} from "@mui/material";

const Filter = () => {
  const [value, setValue] = useState(0);
  const [currentValue, setCurrentValue] = useState("Ascending");
  const label1 = { inputProps: { "aria-label": "checkbox-demo" } };
  return (
    <Box
      sx={{
        maxWidth: "360px",
        height: "fit-content",
        width: "100%",
        bgcolor: "whitesmoke",
        boxShadow: 1,
        pl: 2,
        py: 1,
        pb: 3,
      }}
    >
      {["Ascending", "Descending"].map((asdec) => (
        <List
          key={asdec}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <Radio
            inputProps={{ "aria-label": asdec }}
            name="radio-button"
            value={asdec}
            checked={currentValue === asdec}
            onChange={(e) => setCurrentValue(e.target.value)}
          />
          <ListItemText primary={asdec} />
        </List>
      ))}
      {["Include Out of Stock", "Fast Delivery Only"].map((asdec) => (
        <List
          key={asdec}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <Checkbox {...label1} />
          <ListItemText primary={asdec} />
        </List>
      ))}
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
    </Box>
  );
};

export default Filter;
