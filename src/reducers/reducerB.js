const INIT = { clicks: 0 };

export const reducerB = (state = INIT, action) => {
  switch (action.type) {
    case "increment":
      return { clicks: state + 1 };
    case "decrement":
      return { clicks: state - 1 };
    default:
      return state;
  }
};
