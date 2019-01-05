import actionTypes from '../constants/actionTypes';

export function setReady() {
  return {
    type: actionTypes.SET_READY
  }
}

export function nextQuestion() {
  return {
    type: actionTypes.NEXT_QUESTION
  }
}
