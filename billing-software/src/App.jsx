import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Menubar from "./components/Menubar/Menubar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Explore from "./pages/Explore/Explore";
import ManageItems from "./pages/ManageItems/ManageItems";
import ManageCategory from "./pages/ManageCategory/ManageCategory";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import Inventry from "./pages/Inventry/Inventry";
import { Toaster } from "./../node_modules/react-hot-toast/src/components/toaster";
import "./App.css";
import Login from "./components/Login/Login";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
      setisLoggedIn(true);
    }
  }, []);

  // handling login .....
  const handleLoginSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    setisLoggedIn("true");
  };
  // handling logout....

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setisLoggedIn(false);
  };

  return (
    <div>
      <Toaster />
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          {" "}
          <Menubar  onLogout={handleLogout}/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/manageitems" element={<ManageItems />} />
            <Route path="/managecategory" element={<ManageCategory />} />
            {/* we can impliment in future for different differente user */}
            {/* <Route path='/manageuser' element={<ManageUsers/>} /> */}
            <Route path="/inventry" element={<Inventry />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
