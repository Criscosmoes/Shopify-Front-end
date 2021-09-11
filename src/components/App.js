import React from "react";
import NavBar from "../components/NavBar/NavBar";
import PictureList from "../components/PictureList/PictureList";
import "../App.scss";

const App = () => {
  return (
    <div className="main-container">
      <NavBar />
      <PictureList />
    </div>
  );
};

export default App;
