const initialState = {
  pictureList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PICTURES":
      return {
        ...state,
        pictureList: action.payload,
      };
    case "HANDLE_LIKE_CLICK":
      return {
        ...state,
        pictureList: action.payload,
      };
    default:
      return state;
  }
};
