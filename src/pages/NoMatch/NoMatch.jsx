import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div>
      <h1>Такой страницы нет</h1>
      <p>
        Вернуться <Link to="/">домой</Link>
      </p>
    </div>
  );
}
