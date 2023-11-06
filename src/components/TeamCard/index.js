import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {TeamCardDetails} = props
  const {name, id, teamImageUrl} = TeamCardDetails

  return (
    <Link to={`team-matches/:${id}`}>
      <li className="Team-Card-container">
        <img src={teamImageUrl} alt={id} className="teamName-img" />
        <h1 className="fullName">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
