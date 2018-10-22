export const paneReducer = (state = {
  addPrompt: () => { }
}, action) => {
  switch (action.type) {
    case "INIT_ADD_PROMPT":
      return {
        ...state,
        addPrompt: action.payload
      }
    default:
      return {
        ...state
      }
  }
}