import './TeslaWheels.scss'

import {Component, h} from 'preact'

const SIZES = [19, 21]

class TeslaWheels extends Component {
  state = {
    focused: ''
  }

  onBlur = (e) => {
    this.setState({focused: ''})
  }
  onChange = (e) => {
    this.props.onChange(Number(e.target.value))
  }
  onFocus = (e) => {
    this.setState({focused: Number(e.target.value)})
  }

  render({value}, {focused}) {
    return <div class="tesla-wheels">
      <p class="tesla-wheels__title">Wheels</p>
      <div class="tesla-wheels__container cf">
        {SIZES.map((size) =>
          <label
            key={size}
            class={{
              [`tesla-wheels__item tesla-wheels__item--${size}`]: true,
              'tesla-wheels__item--active': value === size,
              'class.tesla-wheels__item--focused': focused === size,
            }}>
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
}

export default TeslaWheels
