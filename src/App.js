import React from "react";
import "antd/dist/antd.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import AuthRoute from "./utils/AuthRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <AppBar />
      {/* Using a custom Route to redirect to  Autorization Page */}
      <AuthRoute exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
    </Router>
  );
}

export default App;
