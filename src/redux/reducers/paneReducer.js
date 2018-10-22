export const paneReducer = (state = {
  addPrompt: () => { },
  studentIndex: 0,
  prompts: []
}, action) => {
  switch (action.type) {
    case "INIT_ADD_PROMPT":
      return {
        ...state,
        addPrompt: action.payload
      }
      break;
    case "SET_STUDENT_INDEX":
      return {
        ...state,
        studentIndex: action.index
      }
      break;
    case "ADD_PROMPT_TO_STORE":
      return {
        ...state,
        prompts: [...state.prompts, action.payload]
      }
      break;
    case "DELETE_PROMPT_FROM_STORE":
      return {
        ...state,
        prompts: [...state.prompts.filter((prompt) => prompt.uniqueId !== action.payload.uniqueId)],
      }
      break;
    default:
      return {
        ...state
      }
  }
}