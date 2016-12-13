import './TeslaWheels.scss'

import classNames from 'classnames'
import React, {PropTypes as t} from 'react'

const SIZES = [19, 21]

let TeslaWheels = React.createClass({
  propTypes: {
    onChange: t.func.isRequired,
    value: t.number.isRequired,
  },
  getInitialState() {
    return {
      focused: ''
    }
  },

  onBlur() {
    this.setState({focused: ''})
  },
  onChange(e) {
    this.props.onChange(Number(e.target.value))
  },
  onFocus(e) {
    this.setState({focused: Number(e.target.value)})
  },

  render() {
    let {value} = this.props
    let {focused} = this.state
    return <div class="tesla-wheels">
      <p class="tesla-wheels__title">Wheels</p>
      <div class="tesla-wheels__container cf">
        {SIZES.map((size) =>
          <label
            key={size}
            class={classNames(`tesla-wheels__item tesla-wheels__item--${size}`, {
              'tesla-wheels__item--active': value === size,
              'class.tesla-wheels__item--focused': focused === size,
            })}>
            <input
              type="radio"
              name="wheelsize"
              value={size}
              onBlur={this.onBlur}
              onChange={this.onChange}
              onFocus={this.onFocus}
              checked={value === size}
            />
            <p>
              {size}
            </p>
          </label>
        )}
      </div>
    </div>
  }
})

export default TeslaWheels
