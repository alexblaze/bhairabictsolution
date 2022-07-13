import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Routes>
          <Route path="/services" element={<Services />} />
        </Routes>
        <Routes>
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
