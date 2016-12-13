import './TeslaClimate.scss'

import classNames from 'classnames'
import Inferno from 'inferno'
import Component from 'inferno-component'

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
      <label class={classNames('tesla-climate__item', {
        'tesla-heat': !limit,
        'tesla-climate__item--active': value,
        'tesla-climate__item--focused': focused === value,
      })}>
        <p>{limit ? 'ac' : 'heat'} {value ? 'on' : 'off' }</p>
        <i class="tesla-climate__icon"></i>
        <input
          type="checkbox"
          name="climate"
          checked={value}
          onClick={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </label>
    </div>
  }
}

export default TeslaClimate
