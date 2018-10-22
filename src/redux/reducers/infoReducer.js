export const infoReducer = (state = {
  emails: [],
  displayName: ""
}, action) => {
  switch (action.type) {
    case "INIT_USER_INFO":
      return {
        ...state,
        ...action.payload
      }
    default:
      return {
        ...state
      }
  }
}