import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/footer.tsx";
import Home from "./pages/home/home.tsx";
import Analytics from "./pages/offers/analytics/analytics.tsx";
import Orderflow from "./pages/offers/orderflow/orderflow.tsx";
import Automation from "./pages/offers/automation/automation.tsx";
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
        <Route path="/offers/Automation" element={<Automation />} />
        <Route path="/offers/orderflow" element={<Orderflow />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
