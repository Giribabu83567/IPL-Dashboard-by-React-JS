import './Home.css'

const NotFound = () => {

    return (
        <div className='d-flex justify-content-center my-5'>
            <div className='not-found-container'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='ipl-logo'
                        src='https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png' alt='ipl logo'>
                    </img>
                    <h1 className='text-light'>IPL Dashboard</h1>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <h1 className='text-light'>Page Not Found!</h1>
                </div>
            </div>
        </div>
    )
}

export default NotFound;