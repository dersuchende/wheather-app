import React, {Component} from 'react';

// React component
export default class CityWrapper extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return <div className="p-3">
                <h4>This is the Weather in {this.props.name} for the next few days </h4>
            </div>
    }
}