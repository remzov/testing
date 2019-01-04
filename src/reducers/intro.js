import { SET_READY } from '../constants/actionTypes';

const initialState = {
  ready: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_READY:
			return {...state, ready: true}
		default:
      return state;
	}
}

// function setReady(state) {
// 	return {
// 		...state,
//     ready: true
// 	}
// }
