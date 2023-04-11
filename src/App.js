import { React } from "react";
import "./App.css";

import Login from "./components/pages/homesection/Login";
import { Routes, Route } from "react-router-dom";
import Sidenav from "./components/pages/drawer/Sidenav";
import Projectlist from "./components/pages/project/Projectlist";
import Tasklist from "./components/pages/task/Tasklist";
import Holiday from "./components/pages/holiday/Holiday";
import Leave from "./components/pages/leave/Leave";

import Portalhome from "./components/pages/drawer-home/Portalhome";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/sidenav" element={<Sidenav />} />
        <Route path="/projectlist" element={<Projectlist />} />
        <Route path="/tasklist" element={<Tasklist />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/portalhome" element={<Portalhome />} />
      </Routes>
    </>
  );
}

export default App;
