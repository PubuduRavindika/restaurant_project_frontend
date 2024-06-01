import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add.jsx";
import List from "./pages/List.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Edit from "./pages/Edit.jsx";

const App = () => {
  return (
    <div>
      <div>
        <ToastContainer />
        <Navbar />
        <hr />
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
