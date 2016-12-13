import './TeslaCounter.scss'

import Inferno from 'inferno'
import Component from 'inferno-component'

class TeslaCounter extends Component {
  static defaultProps = {
    step: 1
  }

  decrement = () => {
    if (this.props.value > this.props.min) {
      this.props.onChange(this.props.value - this.props.step)
    }
  }
  increment = () => {
    if (this.props.value < this.props.max) {
      this.props.onChange(this.props.value + this.props.step)
    }
  }
  onKeyUp = (e) => {
    let handlers = {
      ArrowUp: () => this.increment(),
      ArrowDown: () => this.decrement()
    }
    if (handlers[e.key]) {
      handlers[e.key]()
      e.preventDefault()
      e.stopPropagation()
    }
  }

  render({min, max, title, unit, value}) {
    return <div class="tesla-counter">
      <p class="tesla-counter__title">{title}</p>
      <div class="tesla-counter__container cf">
        <div
          class="tesla-counter__item"
          onKeyDown={this.onKeyUp}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          tabIndex="0">
          <p class="tesla-counter__number">
            {value}
            <span>{unit}</span>
          </p>
          <div class="tesla-counter__controls" tabIndex="-1">
            <button type="button" tabIndex="-1" onClick={this.increment} disabled={value === max}/>
            <button type="button" tabIndex="-1" onClick={this.decrement} disabled={value === min}/>
          </div>
        </div>
      </div>
    </div>
  }
}

export default TeslaCounter
