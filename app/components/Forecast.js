import React from 'react';
import { getLocation, getCurrentWeather } from '../utils/api';
import Weather from './Weather';

function Loading () {
    return(
        <div>Loading</div>
    )
}

class Forecast extends React.Component {
    state = {
        userName: this.props.user,
        location: null
    }
    componentDidMount() {
        this.updateUser(this.state.userName)
    }
    updateUser = async (user) => {
        this.setState(() => ({
            userName: user,
            location: null
        }));
    
    const location = await getLocation(user);
    this.setState(() => ({location}))
    console.log(location);
    }
    
    
    render() {
        const {userName, location } = this.state;

        return(
            <div className='container'>
            {!location
            ?  <Loading />
            : <Weather location={location} user={userName} />}
            </div>
        )
    }
}


export default Forecast;
