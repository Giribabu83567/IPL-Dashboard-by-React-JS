import './Home.css'
import { useState, useEffect } from 'react';
import IPLTeam from './IPLTeam';

const Home = ()=> {

    useEffect(()=> {
        getIPLTeams()
    }, [])
    const [iplTeams, setIplTeams] = useState([])
    const getIPLTeams = async ()=> {
        try{
            const options = {
                method: "GET"
            }
            const response = await fetch("https://apis.ccbp.in/ipl", options)
            const data = await response.json()
            //console.log(data)
            setIplTeams(data.teams)
        }
        catch(error){
            console.log(error, " is fetching data error")
        }
    }
    //console.log(iplTeams)

    return(
        <div className='d-flex justify-content-center my-5'>
            <div className='ipl-dashboard'>
                <div className='d-flex justify-content-center align-items-center my-3'>
                    <img className='ipl-logo'
                        src='https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png' alt='ipl logo'>
                    </img>
                    <h1 className='text-light'>IPL Dashboard</h1>
                </div>
                <div className='all-teams'>
                    {
                        iplTeams.map((eachTeam)=> (
                        <IPLTeam key={eachTeam.id} Teams={eachTeam}/>
                        )) 
                    }
                </div>  
            </div>
        </div>
    )
}

export default Home;