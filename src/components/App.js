import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import PictureList from "../components/PictureList/PictureList";
import DatePicker from "./DatePicker/DatePicker";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "../App.scss";
import { fetchPictures, setPictureToState } from "./../store/actions/index";

const App = ({
  pictureList,
  fetchPictures,
  byDate,
  setPictureToState,
  isLoading,
}) => {
  // check if there is a picture in local storage for by date array
  const checkLocalStorage = () => {
    const check = localStorage.getItem("byDate");

    if (check) {
      const pictureArray = JSON.parse(check);

      const [card] = pictureArray;

      setPictureToState(card);
    }
  };

  useEffect(() => {
    fetchPictures();
    checkLocalStorage();
  }, []);

  return (
    <div className="main-container">
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <PictureList list={pictureList} />
        </Route>
        <Route path="/searchbydate">
          {byDate.length === 0 ? (
            <div className="error">
              <h2>Please choose a date to fetch from.</h2>
              <DatePicker />
            </div>
          ) : (
            <PictureList list={byDate} />
          )}
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pictureList: state.pictureList,
    byDate: state.byDate,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchPictures, setPictureToState })(
  App
);
