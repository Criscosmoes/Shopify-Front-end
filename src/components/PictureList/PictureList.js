import React, { useEffect, useState } from "react";
import "./_picturelist.scss";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { fetchPictures } from "../../store/actions";

const PictureList = ({ pictureList, fetchPictures }) => {
  const renderedPictures = pictureList.map((cur) => {
    return (
      <li className="card">
        <Card
          key={cur.date}
          date={cur.date}
          author={cur.copyright}
          description={cur.explanation}
          image={cur.url}
          title={cur.title}
          cur={cur}
        />
      </li>
    );
  });

  useEffect(() => {
    fetchPictures();
  }, []);

  return (
    <div className="list-container">
      <ul className="card-container">{renderedPictures}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pictureList: state.pictureList,
  };
};

export default connect(mapStateToProps, {
  fetchPictures,
})(PictureList);
