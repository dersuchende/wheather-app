import React, {Component} from 'react';

// React component
export default class ForecastDetail extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {weather} = this.props;
        return <div className="d-flex flex-column p-3 weather-detail">
            <span><strong>{this.props.time + ':00'}</strong></span>
            <div className="icon"><img src={'//openweathermap.org/img/w/' + weather.icon + '.png'} /></div>
            <span><strong>{weather.main}</strong></span>
            <span><em>{weather.description}</em></span>
        </div>
    }
}