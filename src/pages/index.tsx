import type { NextPage } from "next";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../components/about";
import Home from "../components/home";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const AppEntry: NextPage = () => {
  return (
    <Router>
      <main className={"h-full"}>
        <ul className={"flex items-center justify-around py-4 "}>
          <li>
            <Link to="/" className={"hover:bg-green-400 p-4"}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={"hover:text-indigo-600"}>
              About
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </main>
    </Router>
  );
};

export default AppEntry;
