import React from "react";
import Card from "../components/Card/Card";
import NavBar from "../components/NavBar/NavBar";
import PictureList from "../components/PictureList/PictureList";
import "../App.scss";
import SnackBar from "../components/SnackBar/SnackBar";

const App = () => {
  return (
    <div className="main-container">
      <NavBar />
      <PictureList />
      <SnackBar />
    </div>
  );
};

export default App;
