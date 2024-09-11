// Site made by Marcus Johansson :)

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/footer.tsx";
import Home from "./pages/home/home.tsx";
import AnalyticsPage from "./pages/offers/analytics/analytics.tsx";
import Orderflowsales from "./pages/offers/orderflows/orderflowsales.tsx";
import Orderflowpurchase from "./pages/offers/orderflows/orderflowpurchase.tsx";
import Automation from "./pages/offers/automation/automation.tsx";
import Clients from "./pages/clients/clients.tsx";
import About from "./pages/about/about.tsx";
import Contact from "./pages/contact/contact.tsx";
import useKonamiCode from "./konami.js";
import filmjolk from "./easter-egg/audio.mp3";
import Gothes from "./pages/clients/clientpages/gothes/gothes.tsx";
import Hsb from "./pages/clients/clientpages/hsb/hsb.tsx";
import Maxm from "./pages/clients/clientpages/maxm/maxm.tsx";
import Notfound from "./pages/notfound/notfound.tsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from "./ScrollToTop.js";
import CareerPage from "./pages/career/career.tsx";

function App() {
  const playEasterEggSound = () => {
    const audio = new Audio(filmjolk);
    audio.play();
  };

  useKonamiCode(playEasterEggSound);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services/analytics" element={<AnalyticsPage />} />
        <Route path="/services/automation" element={<Automation />} />
        <Route path="/products/orderflowsales" element={<Orderflowsales />} />
        <Route
          path="/products/orderflowpurchase"
          element={<Orderflowpurchase />}
        />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/gothes" element={<Gothes />} />
        <Route path="/clients/hsb" element={<Hsb />} />
        <Route path="/clients/maxm" element={<Maxm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </Router>
  );
}

export default App;
