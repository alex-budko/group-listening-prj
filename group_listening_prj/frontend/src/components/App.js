import React, {Component} from 'react'
import { render } from 'react-dom'
import CreateRoomPage from './CreateRoomPage';
import HomePage from './HomePage';
import RoomJoinPage from './RoomJoinPage';

export default class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return <div className='center'>
            <HomePage />
        </div>
    }
}

const appDiv = document.getElementById("app");
render(<App name='tim' />, appDiv)