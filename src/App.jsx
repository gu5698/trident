import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Feature from "./pages/Feature/Feature.jsx"; // 引入 MenuComponent
import DefaultLayout from "./layout/DefaultLayout.jsx"; // 引入 MenuComponent

const App = () => {
  const [drawerHeight, setDrawerHeight] = useState(0);

  return (
    <DefaultLayout setDrawerHeight={setDrawerHeight}>
      <Routes>
        <Route
          path="/"
          element={<Feature drawerHeight={drawerHeight}></Feature>}
        />
        <Route
          path="/feature"
          element={<Feature drawerHeight={drawerHeight}></Feature>}
        />
        <Route
          path="/story"
          element={<Feature drawerHeight={drawerHeight}></Feature>}
        />
        <Route
          path="/photos"
          element={<Feature drawerHeight={drawerHeight}></Feature>}
        />
        <Route
          path="/crisis"
          element={<Feature drawerHeight={drawerHeight}></Feature>}
        />
      </Routes>
    </DefaultLayout>
  );
};

export default App;
