export const fetchPictures = () => async (dispatch) => {
  // enter loading state
  dispatch({
    type: "IS_LOADING",
    payload: "false",
  });

  // check if today's pictures are in local storage, if they are, no need to make AJAX request (CACHE?)

  const pictureArray = JSON.parse(localStorage.getItem("pictureList"));

  if (pictureArray) {
    dispatch({
      type: "FETCH_PICTURES",
      payload: pictureArray,
    });

    dispatch({
      type: "IS_LOADING",
      payload: "false",
    });

    return;
  }

  // ajax call

  setTimeout(async () => {
    const res = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=twjJbHAQRzxN7Tug2CDcROEh4JgBNPTQMkpRTlQ8&start_date=2020-01-03&end_date=2020-01-13"
    );
    const json = await res.json();

    // add a "liked" field to each picture item
    const finalArray = addLikedField(json);

    //set to local storage
    localStorage.setItem("pictureList", JSON.stringify(finalArray));

    dispatch({
      type: "FETCH_PICTURES",
      payload: finalArray,
    });

    // exit loading state
    dispatch({
      type: "IS_LOADING",
      payload: "false",
    });
  }, 1500);
};

export const handleLikeClick = (currentCard, oldList) => {
  const { date } = currentCard;

  let listName = oldList.length < 5 ? "byDate" : "pictureList";

  const newPictureList = oldList.map((cur) => {
    if (cur.date === date) {
      return {
        ...cur,
        liked: !cur.liked,
      };
    } else return cur;
  });

  // update localstorage list and state
  localStorage.setItem(listName, JSON.stringify(newPictureList));

  return {
    type: "HANDLE_LIKE_CLICK",
    payload: {
      name: listName,
      array: newPictureList,
    },
  };
};

export const fetchPictureByDate = (date) => async (dispatch) => {
  dispatch({
    type: "IS_LOADING",
    payload: "false",
  });

  setTimeout(async () => {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=twjJbHAQRzxN7Tug2CDcROEh4JgBNPTQMkpRTlQ8&date=${date}`
    );
    const json = await res.json();

    const array = [json];

    const finalArray = addLikedField(array);

    console.log(finalArray);

    // set picture to local storage
    localStorage.setItem("byDate", JSON.stringify(finalArray));

    dispatch({
      type: "FETCH_BY_DATE",
      payload: finalArray,
    });

    dispatch({
      type: "IS_LOADING",
      payload: "false",
    });
  }, 1000);
};

export const setPictureToState = (picture) => {
  return {
    type: "PICTURE_TO_STATE",
    payload: [picture],
  };
};

export const changeLoading = () => {
  return {
    type: "IS_LOADING",
    payload: "false",
  };
};

// helper functions
const addLikedField = (array) => {
  const finalArray = array.map((cur) => {
    return {
      ...cur,
      liked: false,
    };
  });

  return finalArray;
};
