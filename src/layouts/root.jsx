import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Root() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
