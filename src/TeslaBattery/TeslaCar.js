import './TeslaCar.scss'

import React, {PropTypes as t} from 'react'

let TeslaCar = React.createClass({
  propTypes: {
    wheelsize: t.number.isRequired,
  },
  render() {
    let {wheelsize} = this.props
    return <div class="tesla-car">
      <div class="tesla-car__wheels">
        <div class={`tesla-car__wheel tesla-car__wheel--front tesla-car__wheel--${wheelsize}`}></div>
        <div class={`tesla-car__wheel tesla-car__wheel--rear tesla-car__wheel--${wheelsize}`}></div>
      </div>
    </div>
  }
})

export default TeslaCar
