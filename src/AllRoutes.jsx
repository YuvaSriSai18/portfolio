import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Blogs from "./pages/Blogs/Blogs";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
    </Routes>
  );
}
