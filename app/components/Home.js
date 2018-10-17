import React from 'react';
import Forecast from './Forecast';

class Home extends React.Component {
    state = {
        username: '',
        submitted: false
    }
   
    handleChange = (event) => {
        const value = event.target.value;
        this.setState(() =>  ({ username: value, submitted: false }))
    }

    handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(this.state.username)        
        this.setState(() => ({ submitted: true }))
       
    }

    renderForecast() {
        return(
            <div>
                <Forecast user={this.state.username} />           
            </div>
        )
    }

    render() {
        const { username } = this.state
    
        return(
            <div className='container'>
            Enter a GitHub username and find out the weather for user location.
                <form className='column' onSubmit={this.handleSubmit}>
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
