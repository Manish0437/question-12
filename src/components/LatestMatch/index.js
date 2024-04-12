// Write your code here
import MatchCard from '../MatchCard'
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    man_of_the_match,
    id,
    date,
    venue,
    competing_team,
    competing_team_logo,
    first_innings,
    second_innings,
    match_status,
  } = latestMatchDetails

  return (
    <div className="latestMatches-cont">
      <div>
        <p>{competing_team}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div>
        <img
          src={competing_team_logo}
          className="compteting-team-img"
          alt={`latest match ${competing_team}`}
        />
      </div>
      <div>
        <p>First Innings</p>
        <p>{first_innings}</p>
        <p>Second Innings</p>
        <p>{second_innings}</p>
        <h1>Man Of The Match</h1>
        <p>{man_of_the_match}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
