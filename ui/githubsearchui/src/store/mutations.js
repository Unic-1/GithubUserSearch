const setIsLoggedIn = (state, status) => {
    state.isLoggedIn = status
}

const setUsername = (state, username) => {
    state.username = username
}


export default {
    setIsLoggedIn,
    setUsername
}
