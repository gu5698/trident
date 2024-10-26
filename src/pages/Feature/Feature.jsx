import React from "react";
import Banner from "./components/Banner";
import Overview from "./components/Overview";

const Feature = ({ drawerHeight }) => {
  return (
    <>
      <Banner drawerHeight={drawerHeight}></Banner>
      <Overview />
    </>
  );
};

export default Feature;
