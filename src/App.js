import './App.scss'

import React from 'react'

import TeslaBattery from './TeslaBattery'

let App = React.createClass({
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
})

export default App
