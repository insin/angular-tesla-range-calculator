import './TeslaBattery.scss'

import React from 'react'

import modelData from './modelData'
import TeslaCar from './TeslaCar'
import TeslaStats from './TeslaStats'
import TeslaCounter from './TeslaCounter'
import TeslaClimate from './TeslaClimate'
import TeslaWheels from './TeslaWheels'

const RESULT_MODELS = ['60', '60D', '75', '75D', '90D', 'P100D']

function calculateStats(models, config) {
  return models.map(model => {
    let {speed, temperature, climate, wheels} = config
    let miles = modelData[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature]
    return {
      model,
      miles
    }
  })
}

let TeslaBattery = React.createClass({
  getInitialState() {
    let config = {
      speed: 55,
      temperature: 20,
      climate: true,
      wheels: 19,
    }
    return {
      config,
      stats: calculateStats(RESULT_MODELS, config),
    }
  },

  componentWillMount() {
    this._handlers = {}
  },

  handleChange(name) {
    if (!this._handlers[name]) {
      this._handlers[name] = (value) => this.onChange(name, value)
    }
    return this._handlers[name]
  },
  onChange(name, value) {
    let config = {...this.state.config, [name]: value}
    this.setState({config, stats: calculateStats(RESULT_MODELS, config)})
  },

  render() {
    let {config, stats} = this.state
    return <form class="tesla-battery">
      <h1>Range Per Charge</h1>
      <TeslaCar wheelsize={config.wheels}/>
      <TeslaStats stats={stats}/>
      <div class="tesla-controls cf">
        <TeslaCounter
          title="Speed"
          unit="mph"
          step={5}
          min={45}
          max={70}
          onChange={this.handleChange('speed')}
          value={config.speed}
        />
        <div class="tesla-battery__climate cf">
          <TeslaCounter
            title="Outside Temperature"
            unit="°"
            step={10}
            min={-10}
            max={40}
            onChange={this.handleChange('temperature')}
            value={config.temperature}
          />
          <TeslaClimate
            limit={config.temperature > 10}
            onChange={this.handleChange('climate')}
            value={config.climate}
          />
        </div>
        <TeslaWheels
          onChange={this.handleChange('wheels')}
          value={config.wheels}
        />
      </div>
      <div class="tesla-battery__notice">
        <p>
          The actual amount of range that you experience will vary based
          on your particular use conditions. See how particular use conditions
          may affect your range in our simulation model.
        </p>
        <p>
          Vehicle range may vary depending on the vehicle configuration,
          battery age and condition, driving style and operating, environmental
          and climate conditions.
        </p>
      </div>
    </form>
  }
})

export default TeslaBattery
