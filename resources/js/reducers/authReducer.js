import { LOG_IN, LOG_OUT } from "../actions/authActions";

let initialState = {
  loggedIn: false,
  user: null
};

function reducer(state=initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return {
                loggedIn: true,
                user: action.payload && action.payload.user
            }

        case LOG_OUT:
            return {
                loggedIn: false,
                user: null
            }
        default:
            return state;
    }
}

export default reducer;