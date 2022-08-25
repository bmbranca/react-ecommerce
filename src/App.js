import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/images" element={<Photos />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
