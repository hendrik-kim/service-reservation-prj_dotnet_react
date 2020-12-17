import {
  JOB_ADD_SERVICE,
  JOB_REMOVE_SERVICE,
  JOB_SAVE_ORDER_ADDRESS,
} from './../constants/jobDataConstants';

export const jobReducer = (state = { jobItems: [] }, action) => {
  switch (action.type) {
    case JOB_ADD_SERVICE:
      const item = action.payload;

      const existItem = state.jobItems.find((x) => x.service === item.service);

      if (existItem) {
        return {
          ...state,
          jobItems: state.jobItems.map((x) =>
            x.service === existItem.service ? item : x
          ),
        };
      } else {
        return {
          ...state,
          jobItems: [...state.jobItems, item],
        };
      }
    case JOB_REMOVE_SERVICE:
      return {
        ...state,
        jobItems: state.jobItems.filter((x) => x.service !== action.payload),
      };
    case JOB_SAVE_ORDER_ADDRESS:
      return {
        ...state,
        jobAddress: action.payload,
      };
    default:
      return state;
  }
};
