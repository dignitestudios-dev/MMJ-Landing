import React, { Suspense } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import Loader from "./constants/Loader";

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <Suspense fallback={<Loader/>}>
        <Routes>
          {routes.map((route, index) => {
            return <Route element={route.page} path={route.url} key={index} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
