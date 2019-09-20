
const NEW_TIMER = 'NEW_TIMER'
const TOGGLE_TIMER = 'TOGGLE_TIMER'
const SELECT_TIMER = 'SELECT_TIMER'


const addTimer = (name) => {
  return {
    type: NEW_TIMER,
    payload: { name }
  }
}

const toggleTimer = (index) => {
  return {
    type: TOGGLE_TIMER,
    payload: { index }
  }
}

const selectTimer = (index) => {
  return {
    type: SELECT_TIMER,
    payload: { index }
  }
}

export { NEW_TIMER, TOGGLE_TIMER, SELECT_TIMER, addTimer, toggleTimer, selectTimer }
