import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Blogs from "./pages/Blogs/Blogs";

import ReduxBlog from "./pages/Blogs/Blogs_Info/ReduxBlog";
import State_Management from "./pages/Blogs/Blogs_Info/State_Management";
import Web_Sockets from "./pages/Blogs/Blogs_Info/Web_Sockets";
import Socket_IO from "./pages/Blogs/Blogs_Info/Socket_IO";
import FlutterFlow_Start from "./pages/Blogs/Blogs_Info/FlutterFlow_Start";
import FlutterFlow_Customization from "./pages/Blogs/Blogs_Info/FlutterFlow_Customization";
import Firebase_Integration from "./pages/Blogs/Blogs_Info/Firebase_Integration";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/redux-blog" element={<ReduxBlog />} />
      <Route path="/context-vs-redux" element={<State_Management />} />
      <Route path="/websockets-vs-rest" element={<Web_Sockets />} />
      <Route path="/socket-io" element={<Socket_IO />} />
      <Route
        path="/getting-started-with-flutterflow"
        element={<FlutterFlow_Start />}
      />
      <Route
        path="/customizing-flutterflow-app"
        element={<FlutterFlow_Customization />}
      />
      <Route
        path="/firebase-flutterflow-integration"
        element={<Firebase_Integration />}
      />
    </Routes>
  );
}
