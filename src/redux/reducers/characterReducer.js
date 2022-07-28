const initialState = {
  race: null,
  class: null,
  item: null,
};

const SELECT_RACE = "SELECT_RACE";
const SELECT_CLASS = "SELECT_CLASS";
const SELECT_ITEM = "SELECT_ITEM";

export const selectRace = (race) => {
  console.log(race);
  return {
    type: SELECT_RACE,
    payload: race,
  };
};

export const selectClass = (job) => {
  return {
    type: SELECT_CLASS,
    payload: { job: job },
  };
};

export const selectItem = (item) => {
  return {
    type: SELECT_ITEM,
    payload: item,
  };
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_RACE:
      const race = action.payload;
      console.log({ ...state, race: race });
      return { ...state, race: race };
    case SELECT_CLASS:
      const job = action.payload.job;
      console.log({ ...state, class: job });
      return { ...state, class: job };
    case SELECT_ITEM:
      const item = action.payload;
      console.log({ ...state, item: item });
      return { ...state, item: item };
    default:
      return state;
  }
};

export default characterReducer;
