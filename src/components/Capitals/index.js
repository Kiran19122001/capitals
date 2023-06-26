import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    countryId: countryAndCapitalsList[0].id,
  }

  ChangeCapital = event => {
    this.setState({countryId: event.target.value})
  }

  getCountry = () => {
    const {countryId} = this.state
    const result = countryAndCapitalsList.find(each => each.id === countryId)

    return result.country
  }

  render() {
    const {countryId} = this.state
    const country = this.getCountry(countryId)

    return (
      <div className="main-container">
        <div className="card-container">
          <div className="inside-container">
            <h1>Countries and Capitals</h1>
            <ul>
              <select onChange={this.ChangeCapital} value={countryId}>
                {countryAndCapitalsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p>is capital of which country</p>
            </ul>
            <p className="para">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
