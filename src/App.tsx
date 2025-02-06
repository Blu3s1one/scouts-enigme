import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Home from "./routes/Home";
import Enigme1 from "./routes/Enigme1";
import Enigme2 from "./routes/Enigme2";
import Enigme3 from "./routes/Enigme3";
import Enigme4 from "./routes/Enigme4";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./utils/theme";
import OtpProvider from "./providers/OtpProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <OtpProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/enigme1" element={<Enigme1 />} />
            <Route path="/enigme2" element={<Enigme2 />} />
            <Route path="/enigme3" element={<Enigme3 />} />
            <Route path="/enigme4" element={<Enigme4 />} />
          </Routes>
        </Router>
      </OtpProvider>
    </ThemeProvider>
  );
}

export default App;
