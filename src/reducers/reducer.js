const reducer = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return { clicks: state.clicks + 1 };
    case "decrement":
      return { clicks: state.clicks - 1 };
    default:
      return state;
  }
};

export default reducer;
