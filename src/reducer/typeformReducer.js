import { REMOVE_GOAL, REMOVE_ROLE, SET_ERROR_MSG, SET_GOALS, SET_QUESTION_NO, SET_RESPONSE, SET_ROLE } from "./constants";

export const typeFormReducer = (state, action) => {
  switch (action.type) {
    case SET_QUESTION_NO:
      return {
        ...state,
        questionNo: state.questionNo + 1,
      };
    case SET_RESPONSE:
      return {
        ...state,
        response: {
          ...state.response,
          [action.payload.query]: action.payload.ans,
        },
      };
    case SET_ERROR_MSG:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case SET_GOALS:
      return {
        ...state,
        response: {
          ...state.response,
          goal: [...state.response.goal, action.payload],
        },
      };

      case REMOVE_GOAL:
      return {
        ...state,
        response: {
          ...state.response,
          goal: state.response.goal.filter((goal) => goal !== action.payload),
        },
      };

      case SET_ROLE:
      return {
        ...state,
        response: {
          ...state.response,
          role: [...state.response.role, action.payload],
        },
      };

      case REMOVE_ROLE:
      return {
        ...state,
        response: {
          ...state.response,
          role: state.response.role.filter((role) => role !== action.payload),
        },
      };

    default:
      return state;
  }
};
