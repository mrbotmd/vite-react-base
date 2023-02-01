import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
