// TeamMatches.js
import React, {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamData: {
      teamBannerUrl: '',
      latestMatchDetails: {},
      recentMatches: [],
    },
  }

  componentDidMount() {
    this.getTeamData()
  }

  componentDidUpdate(prevProps) {
    const {match} = this.props
    const {params} = match
    const {id} = params
    if (prevProps.match.params.id !== id) {
      this.getTeamData()
    }
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    try {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()

      const updatedData = {
        teamBannerUrl: data.team_banner_url,
        latestMatchDetails: data.latest_match_details,
        recentMatches: data.recent_matches,
      }
      this.setState({teamData: updatedData, isLoading: false})
    } catch (error) {
      console.error('Error fetching team data:', error)
      this.setState({isLoading: false})
    }
  }

  renderTeamItemDetails = () => {
    const {teamData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData

    return (
      <div className="team-info">
        <div>
          <img
            src={teamBannerUrl}
            className="teamBannerUrl-img"
            alt="team banner"
          />
        </div>
        <div className="latest-match-cont">
          <p>Latest Matches</p>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        <ul className="recent-matches-container">
          {recentMatches.map(eachItem => (
            <MatchCard key={eachItem.id} matchDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="team-container">
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamItemDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
