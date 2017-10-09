const INIT = { message: "null" };

export const reducerA = (state = INIT, action) => {
  switch (action.type) {
    case "cool":
      return { message: "cool" };
    case "neato":
      return { message: "neato" };
    case "awesome":
      return { message: "awesome" };
    default:
      return state;
  }
};
