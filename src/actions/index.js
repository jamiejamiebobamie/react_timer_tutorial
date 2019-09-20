
const NEW_TIMER = 'NEW_TIMER'
const TOGGLE_TIMER = 'TOGGLE_TIMER'
const SELECT_TIMER = 'SELECT_TIMER'
const UPDATE = 'UPDATE'

const update = (deltaTime) => {
  return {
    type: UPDATE,
    payload: { deltaTime }
  }
}

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

export { NEW_TIMER, TOGGLE_TIMER, SELECT_TIMER, UPDATE, addTimer, toggleTimer, selectTimer, update }
