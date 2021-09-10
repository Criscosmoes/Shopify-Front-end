import React, { useEffect, useState } from "react";
import "./_picturelist.scss";
import Card from "../Card/Card";

const PictureList = () => {
  const [allPictures, setAllPictures] = useState([]);

  const renderedPictures = allPictures.map((cur) => {
    return (
      <li className="card">
        <Card
          key={cur.date}
          date={cur.date}
          author={cur.copyright}
          description={cur.explanation}
          image={cur.url}
          title={cur.title}
        />
      </li>
    );
  });

  useEffect(() => {
    const fetchPictures = async () => {
      const res = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=twjJbHAQRzxN7Tug2CDcROEh4JgBNPTQMkpRTlQ8&start_date=2020-01-03&end_date=2020-01-13"
      );
      const json = await res.json();
      console.log(json);

      setAllPictures(json);
    };

    fetchPictures();
  }, []);

  return (
    <div className="list-container">
      <ul className="card-container">{renderedPictures}</ul>
    </div>
  );
};

export default PictureList;
