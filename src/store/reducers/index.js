const initialState = {
  pictureList: [],
  byDate: [],
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
        [action.payload.name]: action.payload.array,
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case "FETCH_BY_DATE":
      return {
        ...state,
        byDate: action.payload,
      };
    case "PICTURE_TO_STATE":
      return {
        ...state,
        byDate: action.payload,
      };
    default:
      return state;
  }
};
