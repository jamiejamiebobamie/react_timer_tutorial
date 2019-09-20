import { SELECT_TIMER } from '../actions';
const selectTimerReducer = (state = null, action) => {
  switch (action.type) {
    // On the SELECT_TIMER action, set the selectedTimer to the value passed in the payload
    case SELECT_TIMER:
      return state = action.payload.index;
    default:
      return state;
  }
}
export default selectTimerReducer;
