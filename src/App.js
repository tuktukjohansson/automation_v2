import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";
import Home from "./pages/home/home.tsx";
import Analytics from "./pages/offers/analytics/analytics.tsx";
import Orderflow from "./pages/offers/orderflow/orderflow.tsx";
import Workshop from "./pages/offers/workshop/workshop.tsx";
import Clients from "./pages/clients/clients.tsx";
import Company from "./pages/company/company.tsx";
import Contact from "./pages/contact/contact.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/offers/analytics" element={<Analytics />} />
        <Route path="/offers/workshop" element={<Workshop />} />
        <Route path="/offers/orderflow" element={<Orderflow />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
