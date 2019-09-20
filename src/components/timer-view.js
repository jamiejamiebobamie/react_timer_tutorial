import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTime } from '../utils';

// Import our toggleTimer action
import { toggleTimer } from '../actions'

class TimerView extends Component {
  constructor(props) {
    super(props)
  }

  // Timer should have its name, time, and a start/stop button (logic for this button will be built out later)
  render() {

  // Extract these specific props to use in the component
  const { index, toggleTimer, timer } = this.props
  return (
      <div>
          <h2 className='timer-view-name__h2'>{timer.name}</h2>
          <h1 className='timer-view-time__h1'>{formatTime(timer.time)}</h1>
          <button
          className='timer-view__button'
              onClick={(e) => {
                  toggleTimer(index)
              }}>
              {timer.isRunning ? "Stop" : "Start"}
          </button>
      </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {}
}

// Use the toggleTimer action for this component
const mapDispatchToProps = () => {
  return { toggleTimer }
}

export default connect(mapStateToProps, mapDispatchToProps())(TimerView)
