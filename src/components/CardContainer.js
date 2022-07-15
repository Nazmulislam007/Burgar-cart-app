import { Stack } from "@mui/material";
import BurgarCards from "./BurgarCards";
import Filter from "./Filter";

const CardContainer = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: { md: "flex-start", xs: "center" },
        justifyContent: "center",
        flexDirection: { md: "row", xs: "column" },
        gap: 2,
      }}
    >
      <Filter />
      <BurgarCards />
    </Stack>
  );
};

export default CardContainer;
