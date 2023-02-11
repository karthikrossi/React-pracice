import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Offers from "./components/Offers/Offers";
import Support from "./components/Support/Support";
import Menubar from "./components/Menubar/Menubar";

function App() {
  return (
    <div>
      <Box>
        <Router>
          {/* <Box>
            <Menubar />
          </Box> */}
          <Box>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </Box>
        </Router>
      </Box>
    </div>
  );
}

export default App;
