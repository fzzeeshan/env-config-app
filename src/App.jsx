import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";
import logo from "./assets/react.svg";
import StaticDataTable from "./StaticDataTable";
import HomePage from "./HomePage";
import GitHubContent from "./GitHubContent";
import EnvironmentTable from "./EnvironmentTable";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [showStaticData, setShowStaticData] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div className="app">
          <header className="header">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="title">XX Environment Config</div>
          </header>
          <nav className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/static-data">Static Data</Link>
              </li>
              <li>
                <Link to="/dynamic-data">Dynamic Data</Link>
              </li>
              <li>
                About Us
                <ul className="submenu">
                  <li>
                    <Link to="/env-data">Environment Details</Link>
                  </li>
                  <li>Team</li>
                </ul>
              </li>
              <li>
                Contact Us
                <ul className="submenu">
                  <li>Email</li>
                  <li>Phone</li>
                </ul>
              </li>
            </ul>
          </nav>
          <main className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/static-data"
                element={<StaticDataTable show={showStaticData} />}
              />
              <Route path="/dynamic-data" element={<GitHubContent />} />

              <Route path="/env-data" element={<EnvironmentTable />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
