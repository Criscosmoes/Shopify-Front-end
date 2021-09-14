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

  // get past 7 days to yyyy-mm-dd - yyyy-mm-dd
  const { past, today } = getLastWeekDates();

  console.log(past, today);

  // ajax call

  setTimeout(async () => {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=twjJbHAQRzxN7Tug2CDcROEh4JgBNPTQMkpRTlQ8&start_date=${past}&end_date=${today}`
    );
    const json = await res.json();

    // add a "liked" field to each picture item
    const finalArray = addLikedField(json).reverse();

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
  }, 1100);
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

export const checkLastPicture = () => {
  const pictureArray = JSON.parse(localStorage.getItem("pictureList"));
  const todaysDate = formatDate(new Date()); // yyyy-mm=dd

  if (!pictureArray || todaysDate !== pictureArray[0].date) {
    // means that we don't have an updated list
    fetchPictures();
  } else {
    // our list is updated, nothing to do.
  }

  return {
    type: "TEST",
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

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const getLastWeekDates = () => {
  const dates = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return d;
  });

  let pastTemp = dates[dates.length - 1];
  let todayTemp = dates[0];

  let past = formatDate(pastTemp);
  let today = formatDate(todayTemp);

  return {
    past,
    today,
  };
};
