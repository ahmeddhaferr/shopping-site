import { useState } from "react";
import Register from "./screens/register/register";
import Login from "./screens/login/login";
import Starter from "./screens/starter/Starter";
import { Route,Routes,BrowserRouter as Router } from "react-router";
import Home from "./screens/home/home";
import Profile from "./screens/profile/profile";
function App() {
  return (
    <>
      <div      >
       <Router>
        <Routes>
          <Route path="/" element={<Starter/>}></Route>
          <Route path="/Rigister" element={<Register/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
          <Route path="/Wishlist" element={<Home/>}></Route>
          <Route path="/Cart" element={<Home/>}></Route>
          <Route path="/Categories" element={<Home/>}></Route>
        </Routes>
       </Router>
      </div>
    </>
  );
}

export default App;
