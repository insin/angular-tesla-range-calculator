import './TeslaStats.scss'

import React, {PropTypes as t} from 'react'

let TeslaStats = React.createClass({
  propTypes: {
    stats: t.array.isRequired
  },
  render() {
    let {stats} = this.props
    return <div class="tesla-stats">
      <ul>
        {stats.map(stat =>
          <li key={stat.model}>
            <div class={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
            <p>{stat.miles}</p>
          </li>
        )}
      </ul>
    </div>
  }
})

export default TeslaStats
