// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competing_team, competing_team_logo, match_status} =
    matchDetails

  return (
    <li className="match-card-cont">
      <img
        src={competing_team_logo}
        className="match-card-competing_team_logo-img"
        alt={`competing team ${competing_team}`}
      />
      <p>{competing_team}</p>
      <p>{result}</p>
      <p>{match_status}</p>
    </li>
  )
}

export default MatchCard
