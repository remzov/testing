import actionTypes from '../constants/actionTypes';
import questionsList from '../questions.json';

const initialState = {
  userReady: false,
  userFinished: false,
  active: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_READY:
			return {...state, userReady: true}
    case actionTypes.NEXT_QUESTION:
      return nextHandler(state);
		default:
      return state;
	}
}

function nextHandler(state) {
  if (state.active === questionsList.length-1) {
    return {
      ...state,
      userFinished: true
    }
  } else {
    return {
      ...state,
      active: ++state.active
    }
  }
}
