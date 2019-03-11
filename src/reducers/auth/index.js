// Initial state
const initialState={
  isFirstVisit: true,
  isLoggedIn: false,
  hasSkippedLogin: false,
  hasPassedWalkthrough: false,
  hasPressedSingupButton: false,
  id: null,
  name: null,
  userToken: null,
};

// Actions
const FIRST_VISIT='AuthState/FIRST_VISIT';
const SKIPPED_LOGIN='AuthState/SKIP';
const LOGGED_IN='AuthState/LOGGED_IN';
const PASSED_WALKTHROUGH='AuthState/PASSED_WALKTHROUGH';
const LOGGED_OUT='AuthState/LOGGED_OUT';

// Action creators

export function firstVisit() {
  return {
    type: FIRST_VISIT,
  };
}
export function loggedIn(userData) {
  return {
    type: LOGGED_IN,
    payload: userData,
  };
}

export function skipLogin() {
  return {
    type: SKIPPED_LOGIN,
  };
}

export function passedWalkthrough() {
  return {
    type: PASSED_WALKTHROUGH,
  };
}

export function loggedOut() {
  return {
    type: LOGGED_OUT,
  };
}

// Reducer
export default function AuthStateReducer(state=initialState,action={}) {
  switch(action.type) {
    case FIRST_VISIT:
      return Object.assign({},state,{
        isFirstVisit: false,
        isLoggedIn: false,
        hasSkippedLogin: false,
        id: null,
        name: null,
        hasPassedWalkthrough: state.hasPassedWalkthrough,
      });
    case LOGGED_IN:
      return Object.assign({},state,{
        hasPassedWalkthrough: state.hasPassedWalkthrough,
        isLoggedIn: true,
        id: action.data.id,
        name: action.data.name,
        userToken: action.data.userToken,
      });
    case SKIPPED_LOGIN:
      return Object.assign({},state,{
        isLoggedIn: false,
        hasSkippedLogin: true,
        id: null,
        name: null,
        hasPassedWalkthrough: state.hasPassedWalkthrough,
      });
    case PASSED_WALKTHROUGH:
      return Object.assign({},state,{
        isLoggedIn: false,
        hasSkippedLogin: false,
        id: null,
        name: null,
        hasPassedWalkthrough: true,
      });
    case LOGGED_OUT:
      return Object.assign({},state,{
        isLoggedIn: false,
        hasSkippedLogin: false,
        loggedOut: true,
        hasPassedWalkthrough: state.hasPassedWalkthrough,
        id: null,
        name: null,
      });
    default:
      return state;
  }
}
