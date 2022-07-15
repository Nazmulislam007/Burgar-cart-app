import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Badge,
  Button,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import burgarDetails from "../constant/BurgarApi";
import DeleteIcon from "@mui/icons-material/Delete";

const MenuNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        open={open}
        anchorEl={anchorEl}
      >
        {burgarDetails
          .slice(0, 2)
          .map(({ burgarImg, id, burgarName, price, delivaryTime }) => (
            <MenuItem key={id} onClick={handleClose}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                spacing={1}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img width="120" src={burgarImg} alt={burgarName} />
                  <div>
                    <Typography variant="h6" component="div">
                      {burgarName}
                    </Typography>
                    <Typography variant="subtitle2" color="GrayText">
                      ৳ {price}
                    </Typography>
                    <Typography
                      variant="caption"
                      gutterBottom
                      color="text.secondary"
                    >
                      {delivaryTime} hours delivery
                    </Typography>
                  </div>
                </div>

                <div>
                  <DeleteIcon color="error" className="error-btn" />
                </div>
              </Stack>
            </MenuItem>
          ))}
      </Menu>
    </>
  );
};

export default MenuNav;
