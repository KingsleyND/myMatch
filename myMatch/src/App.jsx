// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Profile from "./components/Profile";
import Groups from "./components/Groups";
import Home from "./components/Home";
import Modal from "./components/Modal";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";


const App = () => {
  return (
    <>
    <NavbarComp/>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Groups" element={<Groups />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          
        </Routes>
      </BrowserRouter>
      {/* <LoginSignUp/> */}
      
      
    <Modal />
    </>
  );
};

export default App;
