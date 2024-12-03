import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Login_v1 from "./Pages/Login_v1";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login_v1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
