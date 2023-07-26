const initialNum = 100;

export const counterReducer = (state = initialNum, action) => {
  if (action.type === 'INCREASE') {
    return state +1
  } else if (action.type === 'DECREASE') {
    return state -1
  } else if (action.type === 'SET_COUNT') {
    return action.payload
  } else {
    return state
  }
}