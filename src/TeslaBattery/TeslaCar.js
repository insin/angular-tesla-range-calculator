import './TeslaCar.scss'

import Inferno from 'inferno'
import Component from 'inferno-component'

class TeslaCar extends Component {
  render({wheelsize}) {
    return <div class="tesla-car">
      <div class="tesla-car__wheels">
        <div class={`tesla-car__wheel tesla-car__wheel--front tesla-car__wheel--${wheelsize}`}></div>
        <div class={`tesla-car__wheel tesla-car__wheel--rear tesla-car__wheel--${wheelsize}`}></div>
      </div>
    </div>
  }
}

export default TeslaCar
