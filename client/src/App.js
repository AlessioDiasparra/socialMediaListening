import "./App.css";
import Login from "./pages/login";
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { loginUser } from "./utils/axiosApiClient";
import { useNavigate, redirect } from "react-router-dom";

export default function App() {
  //stato token
  //dati form login
  const [formData, setFormData] = useState({ username: "", password: "" });
  //const [user, setUser] = useState({});
  const navigate = useNavigate();

  const checkValidToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };

  //gestisce login
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      username: encodeURIComponent(formData.username),
      password: encodeURIComponent(formData.password)
    });
    
    if (response?.bearerToken) {
      window.localStorage.setItem("token", response?.bearerToken);
    }
    
    if (response?.expiration) {
      window.localStorage.setItem("expiration", response?.expiration);
    }
    navigate("/page1");
  };

  //gestione logout
  const handleLogout = () => {
    window.localStorage?.removeItem("token");
    navigate("/");
  };

  const checkToken = checkValidToken();

  if (!checkToken || checkToken === "" || checkToken === undefined) {
    return redirect("/login");
  } else {
    //rotte private
    return checkValidToken() ? <Dashboard onLogout={handleLogout} /> : redirect("/login");
  }
}
