const INIT = { clicks: 0 };

export const clicks = (state = INIT, action) => {
  switch (action.type) {
    case "increment":
      return { clicks: state.clicks + 1 };
    case "decrement":
      return { clicks: state.clicks - 1 };
    default:
      return state;
  }
};
