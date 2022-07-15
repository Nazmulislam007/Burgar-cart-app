import { Container, CssBaseline, Stack } from "@mui/material";
import { CardContainer, Navbar } from "./components";

function App() {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Stack spacing={2}>
        <Navbar />
        <CardContainer />
      </Stack>
    </Container>
  );
}

export default App;
