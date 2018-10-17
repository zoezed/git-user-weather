import React from 'react';
import { getLocation, getCurrentWeather } from '../utils/api';
import Forecast from './Forecast';

function Loading () {
    return(
        <div>Loading</div>
    )
}

class Home extends React.Component {
    state = {
        username: '',
        submitted: false
    }
   
    handleChange = (event) => {
        const value = event.target.value;
        this.setState(() =>  ({ username: value }))
    }

    handleSubmit = (event) => {
        event.preventDefault();

       console.log(this.state.username)
       this.setState(() => ({ submitted: true}))
       
    }

    renderForecast() {
        return(
            <Forecast user={this.state.username} />
        )
    }

    render() {
        const { username } = this.state
        const { label } = this.props
        
        return(
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>{label}</label>
                    <input 
                        id='username'
                        placeholder='github user'
                        type='text'
                        value={username}
                        autoComplete='off'
                        onChange={this.handleChange}
                    />
                    <button
                        className='button'
                        type='submit'
                        disabled={!username}>
                            Submit
                    </button>
                </form>
                {this.state.submitted && this.renderForecast()}
            </div>
        )
    }
}


export default Home
