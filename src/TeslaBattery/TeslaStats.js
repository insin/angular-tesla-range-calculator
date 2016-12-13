import './TeslaStats.scss'

import Inferno from 'inferno'
import Component from 'inferno-component'

class TeslaStats extends Component {
  render({stats}) {
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
}

export default TeslaStats
