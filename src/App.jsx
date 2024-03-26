import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Showmenu from "./components/Showmenu";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogcards from "./components/Blogcards";

function App() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />

      {/* <Link to={"blogs"}>TO BLOGS</Link> */}
    </>
  );
}

export default App;
