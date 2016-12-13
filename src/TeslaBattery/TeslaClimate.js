import './TeslaClimate.scss'

import {Component, h} from 'preact'

class TeslaClimate extends Component {
  state = {
    focused: false
  }

  onBlur = () => {
    this.setState({focused: true})
  }
  onChange = (e) => {
    this.props.onChange(e.target.checked)
  }
  onFocus = (e) => {
    this.setState({focused: false})
  }

  render({limit, value}, {focused}) {
    return <div class="tesla-climate">
      <label class={{
        'tesla-climate__item': true,
        'tesla-heat': !limit,
        'tesla-climate__item--active': value,
        'tesla-climate__item--focused': focused === value,
      }}>
        <p>{limit ? 'ac' : 'heat'} {value ? 'on' : 'off' }</p>
        <i class="tesla-climate__icon"></i>
        <input
          type="checkbox"
          name="climate"
          checked={value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </label>
    </div>
  }
}

export default TeslaClimate
