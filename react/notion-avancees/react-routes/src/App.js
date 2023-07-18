import { Outlet } from "react-router-dom";
import Footer from "./pages/layouts/Footer";
import Navbar from "./pages/layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
