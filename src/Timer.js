import React, { Component } from 'react';

class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:props.name,
            time:0,
            isRunning: false,
        }
    }
}

export default Timer;
