import { SET_ERROR_MSG, SET_QUESTION_NO, SET_RESPONSE } from "./constants";

export const typeFormReducer = (state, action) => {
    switch(action.type) {
        case SET_QUESTION_NO:
            return {
                ...state,
                questionNo: state.questionNo + 1
            }
        case SET_RESPONSE:
            return {
                ...state,
                response: {
                    ...state.response,
                    [action.payload.query] : action.payload.ans
                }
            }
        case SET_ERROR_MSG:
            return {
                ...state,
                errorMessage: action.payload
            }
         default:
            return state;   
    }
}