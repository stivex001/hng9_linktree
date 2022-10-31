import Footer from "./components/Footer/Footer";
import Link from "./components/Links/Link";
import Social from "./components/Social/Social";
import User from "./components/User/User";
import "./index.css"


function App() {
  return (
    <>
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
