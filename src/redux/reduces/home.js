/* eslint-disable */
const INITALLOGO = "home/INITALLOGO";
const CHANGEHISTORY = "home/CHANGEHISTORY";
const SET_TEST_DATA = "home/SET_TEST_DATA";

export function changeRoute() {
  return {
    type: CHANGEHISTORY,
    text: "showDocs",
  };
}
export function initalLogo() {
  return {
    type: INITALLOGO,
  };
}
export function setTestData(list) {
  return {
    type: SET_TEST_DATA,
    list: list,
  };
}

const initialState = {
  movelogo: false,
  list: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITALLOGO:
      return {
        ...state,
        movelogo: false,
      };
    case SET_TEST_DATA:
      console.log(action, "action");
      return {
        ...state,
        list: [...action.list],
      };
    case CHANGEHISTORY:
      return {
        ...state,
        movelogo: true,
        text: action.text,
      };
    default:
      return state;
  }
}
