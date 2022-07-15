import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Badge,
  Button,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ borderBottom: "1px solid black" }} position="sticky">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontSize: { xs: "1rem", sm: "1.3rem" },
          }}
          component="h6"
          variant="h6"
        >
          Shopping Cart
        </Typography>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{ ml: "auto" }}
          onClick={handleOpen}
          color="inherit"
        >
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </Button>
        <Menu
          id="fade-menu"
          onClose={handleClose}
          open={open}
          anchorEl={anchorEl}
        >
          {["item1", "item2", "item3"].map((item) => (
            <MenuItem key={item} onClick={handleClose}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
