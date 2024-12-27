import { useState } from "react";
import Register from "./screens/register/register";
import Login from "./screens/login/login";
import Starter from "./screens/starter/Starter";
import { Route,Routes,BrowserRouter as Router } from "react-router";
import Home from "./screens/home/home";
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
        </Routes>
       </Router>
      </div>
    </>
  );
}

export default App;
