import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Login_v1 from "./Pages/Login_v1";

import Home from "./Pages/Home";
import { ThemeProvider } from "./Components/theme-provider"
import ConnectionMangScreen from "./Pages/ConnectionMangScreen";
import ProjectDetails from "./Pages/ProjectDetails";
import NotfoundPage from "./Pages/NotfoundPage";
import SourceSelection from "./Pages/SourceSelection";
import DataSourcemagement from "./Pages/DataSourcemagement";
import DataSet from "./Pages/DataSet";
import DataSetUser from "./Pages/DataSetUser";
import Messages from "./Pages/Messages";




function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <BrowserRouter>
           {/* <Page />  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginv1" element={<Login_v1 />} />
            <Route path="/connectionmang" element={<ConnectionMangScreen />} />
            {/* <Route path="/cloudinfrastructure" element={<CloudInfrastructure />} /> */}
            <Route path="/Projectdetails" element={<ProjectDetails/>} />
            <Route path="/sourceselection" element={<SourceSelection/>} />   
            <Route path="/DataSourcemagement" element={<DataSourcemagement/>} />
            <Route path="/dataset" element={<DataSet/>} />
            <Route path="/datasetuser" element={<DataSetUser/>} />
            <Route path="/messages" element={<Messages/>} />
                  
            <Route path="*" element={<NotfoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
