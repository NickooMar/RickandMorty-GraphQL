import React from "react";

import { Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/characters/:page" element={<Characters />} />
    </Routes>
  );
};

export default App;
