const ScreensReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_SCREEN":
      return { ...state, screen: action.screen };
    default:
      return state;
  }
};

export default ScreensReducer;
