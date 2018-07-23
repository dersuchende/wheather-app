import React, {Component} from 'react';
import Form from './Form';
import CityWrapper from './CityWrapper';
import DailyWeather from './DailyWeather';

// React component
export default class ViewWrapper extends Component {
    constructor(props){
        super(props);

    }
    render() {
        let CityDisplay = '';
        let DailyDisplay ='';
        if(Object.keys(this.props.result).length > 0){
            CityDisplay = <CityWrapper {...this.props.result.city}/>;
            let forecast = this.props.result.forecast;
            DailyDisplay = Object.keys(forecast).map((item, index) => {
                return <DailyWeather index={index} forecast ={forecast[item]} day={item}/>
            });
        }

        return <div>
            <Form {...this.props} />
            <div className="forecast-container">
                {CityDisplay}
                <div className="d-flex flex-md-row flex-column">{DailyDisplay}</div>
            </div>

        </div>
    }
}