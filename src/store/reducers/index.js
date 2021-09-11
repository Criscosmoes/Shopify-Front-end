const initialState = {
  pictureList: [],
  isLoading: false,
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
    case "IS_LOADING":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};
