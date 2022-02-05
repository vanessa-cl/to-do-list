import "primereact/resources/themes/mdc-dark-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodayToDos from "./Pages/TodayToDos/TodayToDos.jsx";
import AllToDos from "./Pages/AllToDos/AllToDos.jsx";
import PendantToDos from "./Pages/PendantToDos/PendantToDos";
import DoneToDos from "./Pages/DoneToDos/DoneToDos";
import Header from "./Components/Header/Header";

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<TodayToDos />} />
        <Route path="/all" element={<AllToDos />} />
        <Route path="/pendant" element={<PendantToDos />} />
        <Route path="/done" element={<DoneToDos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
