import { HELLO_WORLD } from "../constants/types";

const initialState = {
  buttonClicked: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HELLO_WORLD:
      state = { ...state, buttonClicked: !state.buttonClicked };
      return state;
    default:
      return state;
  }
}
