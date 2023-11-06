// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {
    TeamsList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getTeamList()
  }

  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updateData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({TeamsList: updateData, isLoading: false})
  }

  render() {
    const {TeamsList} = this.state
    const {isLoading} = this.state

    return (
      <div className="dashboard-container">
        <div className="head-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="img-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
        ) : (
          <ul>
            {TeamsList.map(eachTeam => (
              <TeamCard teamCardDetails={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
