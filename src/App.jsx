import React from "react";

import { Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Homepage from "./pages/Homepage";

import Logo from "./assets/logo-icon.png";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav className="w-full bg-white">
        <div className="flex justify-between">
          <Link to={"/"} className="mt-2 ml-4">
            <img src={Logo} alt="logo" className="h-14 " />
          </Link>
          <div className="inline text-end mx-auto md:flex md:justify-end w-full mt-1">
            <Link to={"/characters/1"}>
              <h1 className="p-2 rounded-md mt-1 font-bold mx-4 hover:text-orange-400 text-lg">
                Characters
              </h1>
            </Link>
            <Link to={"https://rickandmortyapi.com/documentation"}>
              <h1 className="p-2 rounded-md mt-1 font-bold mx-4 hover:text-orange-400 text-lg">
                Docs
              </h1>
            </Link>
            <Link to={"https://rickandmortyapi.com/about"}>
              <h1 className="p-2 rounded-md mt-1 font-bold mx-4 hover:text-orange-400 text-lg">
                About
              </h1>
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/characters/:page" element={<Characters />} />
      </Routes>
    </>
  );
};

export default App;
