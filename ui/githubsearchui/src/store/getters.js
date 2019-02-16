const getIsLoggedIn = (state) => {
  return state.isLoggedIn
}

const getUsername = (state) => {
  return state.username
}

export default {
  getIsLoggedIn,
  getUsername
}
