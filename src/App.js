import { Container, CssBaseline } from "@mui/material";
import { Burgars, Home } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/burgers" element={<Burgars />} />
        <Route path="/burgers" element={<Burgars />} />
      </Routes>
    </Container>
  );
}

export default App;
