import './Home.css'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"

const TeamsPage = ()=> {

    const {id} = useParams();

    const [isLoading, setIsLoading] = useState(true)

    const [teamData, setTeamData] = useState({});
    const [latestMatchDetails, setLatestMatchDetails] = useState({})
    const [recentMatches, setRecentMatches] = useState([])
    useEffect(()=> {
        getTeamDetails()
    }, [])
    const getTeamDetails = async ()=> {
        try{
            const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
            const data = await response.json()
            setTeamData(data)
            setLatestMatchDetails(data.latest_match_details)
            setRecentMatches(data.recent_matches)

            setIsLoading(false)
        }
        catch(error){
            console.log(error, " is the data fetching Teams")
        }
    }
    //console.log(teamData);
    //console.log(latestMatchDetails)
    //console.log(recentMatches)

    const { team_banner_url} = teamData;
    const { competing_team, competing_team_logo, date,first_innings, man_of_the_match, match_status, result,
             second_innings, umpires, venue} = latestMatchDetails;
    
    const [status, setStatus] = useState('Won')

    const navigate = useNavigate()
    const handleGoBack = ()=> {
        navigate(-1)
    }


    return(
        <div>{isLoading? <div class="spinner-border"></div> : 

            <div>
                <button onClick={handleGoBack} className='btn btn-primary'>Go Back</button>

                <div className='d-flex justify-content-center'>
                    <div className='teams-container'>
                        <div className='team-banner-section'>
                            <img src={team_banner_url} className='team-banner'></img>
                        </div>
                        <div className='latest-match-section'>
                            <div>
                                <h4>{competing_team}</h4>
                                <p>{date}</p>
                                <p>{venue}</p>
                                <p>{result}</p>
                            </div>
                            <div>
                                <img src={competing_team_logo} className='opposition-team-logo'></img>
                            </div>
                            <div className='latest-match-details2'>
                                <h5>First Innings</h5>
                                <p>{first_innings}</p>
                                <h5>Second Innings</h5>
                                <p>{second_innings}</p>
                                <h5>Man Of The Match</h5>
                                <p>{man_of_the_match}</p>
                                <h5>Umpires</h5>
                                <p>{umpires}</p>
                            </div>
                        </div>

                        <div className='recent-match-container'>
                            {
                                recentMatches.map((eachMatch)=> (
                                    <div className='match-results card'>
                                        <img src={eachMatch.competing_team_logo} className='match-results-photo'></img>
                                        <h4 className='text-center'>{eachMatch.competing_team}</h4>
                                        <p className={status === eachMatch.match_status? 'winner' : 'looser'}>
                                            {eachMatch.result}
                                        </p>
                                        <p className={status === eachMatch.match_status? 'win-color' : 'lose-color'}>
                                            {eachMatch.match_status}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div> }
        </div>
    )
}

export default TeamsPage;