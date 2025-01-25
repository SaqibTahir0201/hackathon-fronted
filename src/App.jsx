// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          {/* Add a route for '/' */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {user && (
            <Route
              path="/profile"
              element={<div>Welcome {user.name}, your profile page</div>}
            />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
