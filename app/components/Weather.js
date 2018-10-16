import React from 'react'
import ReactDOM from 'react-dom';
import { getForecast } from '../utils/api.js';
import {DayItem} from './DayItem';

function Loading() {
    return(
        <div>Loading</div>
    )
}

class Weather extends React.Component {
    state = {
        weatherOb: [],
        loading: true,
        city: ''

    }

    componentDidMount() {       
        this.getTheWeather(this.props.location.location)
    }

    getTheWeather (city) {
        getForecast(city).then((res) =>{
            this.setState(() => ({
                weatherOb: res,
                loading: false,
                city: city
            }))

            
           
            const weatherOb = this.state.weatherOb
            const newWeatherOb = {};
            newWeatherOb.list = [];
            weatherOb.list.map((weathItem) => { 
                if (newWeatherOb.list.length > 0) {           
                    const theDay = weathItem.dt_txt.substring(1,10);        
                    let flag = true;
                    for(let i=0; i<newWeatherOb.list.length; i++) {
                        const dd = newWeatherOb.list[i];
                        
                        if(dd.dt_txt.substring(1,10) === theDay)
                            flag = false;                                    
                    }
                    if (flag === true)
                        newWeatherOb.list.push(weathItem);    
                    }
                else {
                    newWeatherOb.list.push(weathItem); 
                }
            
            })
            this.setState(() => ({ weatherOb : newWeatherOb }))

            })

        }

    render() {

        const { weatherOb, city, loading} = this.state
    
        return(         

                loading===true
                ? <Loading />
                : <div>
                    Github User {this.props.user} from {city} and the weather is
                    <div className="forecast-container">
                        {weatherOb.list.map((weathItem) => {
                            return <DayItem day={weathItem} key={weathItem.dt} />
                        })
                        }
                    </div>
                </div>
           
        )
    }
}

export default Weather;