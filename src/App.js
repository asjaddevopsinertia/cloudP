import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AddPosts from "./pages/addPost";
import { Login } from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/add-post" exact element={<AddPosts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
