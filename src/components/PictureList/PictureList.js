import React from "react";
import "./_picturelist.scss";
import Card from "../Card/Card";

const PictureList = () => {
  const cardList = [1, 2, 3].map((cur) => {
    return <Card />;
  });

  return (
    <div className="list-container">
      <ul className="card-container">{cardList}</ul>
    </div>
  );
};

export default PictureList;
