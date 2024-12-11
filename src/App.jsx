import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Login_v1 from "./Pages/Login_v1";

import Home from "./Pages/Home";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from './Components/layouts/Navbar';
import { Page } from "./Components/layouts/Sidebar/page";




function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          {/* <Page /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginv1" element={<Login_v1 />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
