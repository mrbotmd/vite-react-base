import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Home
      <Link to="/404">To 404</Link>
    </div>
  );
}
