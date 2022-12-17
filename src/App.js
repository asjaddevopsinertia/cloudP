import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { AddPosts } from "./pages/addPost";
import { Login } from "./pages/login";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./components/protectedRoute";

function App() {
  const userState = useSelector((state) => state.user);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route
            path="/home"
            exact
            element={
              <ProtectedRoute user={userState.user}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-post"
            exact
            element={
              <ProtectedRoute user={userState.user}>
                <AddPosts />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
