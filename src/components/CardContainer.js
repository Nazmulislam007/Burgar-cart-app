import { Stack } from "@mui/material";
import Filter from "./Filter";
import ShoppingCards from "./ShoppingCards";

const CardContainer = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: { md: "row", xs: "column" },
        gap: 2,
      }}
    >
      <Filter />
      <ShoppingCards />
    </Stack>
  );
};

export default CardContainer;
