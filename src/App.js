import MainRoutes from "./pages/MainRoutes";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="#edf3f8">
      <Navbar />
      <MainRoutes />
    </Box>
  );
}

export default App;
