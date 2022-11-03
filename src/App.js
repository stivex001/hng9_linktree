import { Route, Routes} from "react-router-dom"

import Footer from "./components/Footer/Footer";
import Link from "./components/Links/Link";
import Social from "./components/Social/Social";
import User from "./components/User/User";
import Contact from "./contact/Contact";
import "./index.css"


function App() {
  return (
    <>
    <Routes>
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <header className="container">
    <User />
  </header>
  <main>
    <Link />
    <Social />
  </main>
  <Footer/>
    </>
  );
}

export default App;
