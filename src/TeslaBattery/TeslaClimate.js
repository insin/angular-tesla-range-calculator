import './TeslaClimate.scss'

import classNames from 'classnames'
import React, {PropTypes as t} from 'react'

let TeslaClimate = React.createClass({
  propTypes: {
    limit: t.bool.isRequired,
    onChange: t.func.isRequired,
    value: t.bool.isRequired,
  },
  getInitialState() {
    return {
      focused: false
    }
  },

  onBlur() {
    this.setState({focused: true})
  },
  onChange(e) {
    this.props.onChange(e.target.checked)
  },
  onFocus(e) {
    this.setState({focused: false})
  },

  render() {
    let {limit, value} = this.props
    let {focused} = this.state
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
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </label>
    </div>
  }
})

export default TeslaClimate
