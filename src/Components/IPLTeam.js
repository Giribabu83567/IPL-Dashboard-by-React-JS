import './Home.css'
import { Link } from 'react-router-dom'

const IPLTeam = (props) => {

    const { Teams } = props;
    const { id, name, team_image_url } = Teams;

    return (
        <Link to={`/team/${id}`} className='each-team'>
            <div>
                <img src={team_image_url} className='team-logo'></img>
            </div>
            <div>
                <h5>{name}</h5>
            </div>
        </Link>
    )
}

export default IPLTeam;