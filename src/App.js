import './App.scss'

import {Component, h} from 'preact'

import TeslaBattery from './TeslaBattery'

class App extends Component {
  render() {
    return <div>
      <header class="header">
        <img src={require('assets/logo.svg')}/>
      </header>
      <div class="wrapper">
        <TeslaBattery/>
      </div>
    </div>
  }
}

export default App
