import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate , useLocation } from "react-router-dom";
import Home from "./Component/Body/Home";
import Header from "./Component/Header/Header";
import Fightinhand from "./Component/Body/Fightinhand";
import Meetkenpaxton from "./Component/Body/Meetkenpaxton";
import Join from "./Component/Body/Join";
import Donate from "./Component/Body/Donate";


const Layout = () => {
  const location = useLocation();

  const hideHeader =
    location.pathname ===
    "/winred/ken-paxton-for-senate/donate-today/653898598083884832845";

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issues" element={<Fightinhand />} />
        <Route path="/about" element={<Meetkenpaxton />} />
        <Route path="/paxton-s-patriots" element={<Join />} />
        <Route
          path="/winred/ken-paxton-for-senate/donate-today/653898598083884832845"
          element={<Donate />}
        />
      </Routes>
    </>
  );
};


const App = () => {
  return (
    <BrowserRouter>
     
       <Layout />
    
    </BrowserRouter>
  );
};

export default App;
