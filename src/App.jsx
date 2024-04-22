import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <Routes>
        {routes.map((route, index) => {
          return <Route element={route.page} path={route.url} key={index} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
