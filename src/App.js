import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import "./index.css";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
