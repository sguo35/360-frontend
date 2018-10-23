export const accountReducer = (state = {
    email: ""
  }, action) => {
    switch (action.type) {
      case "INIT_ACCOUNT_INFO":
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