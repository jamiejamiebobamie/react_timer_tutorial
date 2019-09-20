import React, { Component } from 'react'
import { connect } from 'react-redux'

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
        <h2>{timer.name}</h2>
        <h1>{timer.time}</h1>
        <button
            // This calls our toggleTimer action on the specific timer (specified by the index)
            onClick={(e) => {
                toggleTimer(index)
            }}>
            // Text of the button is determined by if the timer is running or not
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
