import React, { useEffect, useState } from "react";
import "./_picturelist.scss";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { fetchPictures } from "../../store/actions";
import Loading from "../Loading/Loading";

const PictureList = ({ pictureList, fetchPictures, isLoading }) => {
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

  const loadingComponents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
    (cur, i) => {
      return <Loading />;
    }
  );

  useEffect(() => {
    fetchPictures();
  }, []);

  return (
    <div className="list-container">
      <ul className="card-container">
        {isLoading ? loadingComponents : renderedPictures}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pictureList: state.pictureList,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, {
  fetchPictures,
})(PictureList);
