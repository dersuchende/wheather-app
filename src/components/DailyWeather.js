import React, {Component} from 'react';
import ForecastDetail from './ForecastDetail';

// React component
export default class DailyWeather extends Component {
    constructor(props){
        super(props);
    }
    render() {

        const forecastData = Object.keys(this.props.forecast).map((item, index) =>{
                return <ForecastDetail index={index} {...this.props.forecast[item]} />
        });

        return <div className="container forecast-column p-3">
            <div><h5>{this.props.day}</h5></div>
            <div>{forecastData}</div>
        </div>

    }
}