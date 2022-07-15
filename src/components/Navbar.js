import { Link } from "react-router-dom";
import { IconButton, Toolbar, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuNav from "./MenuNav";

const Navbar = () => {
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
          <Link to="/"> Burger Cart</Link>
        </Typography>
        <MenuNav />
      </Toolbar>
    </Box>
  );
};

export default Navbar;
