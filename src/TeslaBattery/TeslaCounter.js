import './TeslaCounter.scss'

import React, {PropTypes as t} from 'react'

let TeslaCounter = React.createClass({
  propTypes: {
    min: t.number.isRequired,
    max: t.number.isRequired,
    onChange: t.func.isRequired,
    step: t.number,
    title: t.string.isRequired,
    unit: t.string.isRequired,
    value: t.number.isRequired,
  },
  getDefaultProps() {
    return {
      step: 1
    }
  },

  decrement() {
    if (this.props.value > this.props.min) {
      this.props.onChange(this.props.value - this.props.step)
    }
  },
  increment() {
    if (this.props.value < this.props.max) {
      this.props.onChange(this.props.value + this.props.step)
    }
  },
  onKeyUp(e) {
    let handlers = {
      ArrowUp: () => this.increment(),
      ArrowDown: () => this.decrement()
    }
    if (handlers[e.key]) {
      handlers[e.key]()
      e.preventDefault()
      e.stopPropagation()
    }
  },

  render() {
    let {min, max, title, unit, value} = this.props
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
})

export default TeslaCounter
