import React from "react";

import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-2xl">Homepage</h1>
      <button onClick={() => navigate("/characters/1")} style={{padding: 5, backgroundColor: '#548Ef6', borderRadius: 10, marginTop: 15}}>Characters</button>
    </div>
  );
};

export default Homepage;
