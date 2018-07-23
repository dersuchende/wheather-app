import React, {Component} from 'react';

// React component
export default class Form extends Component {
    constructor(props){
        super(props);
        this.city = React.createRef();
    }
    render() {
        const { getWheaterData} = this.props;
        return (
            <div className="form p-3">
                <input className="city m-3" ref={this.city} type="text"/>
                <button className="btn btn-primary m-3" onClick={() => getWheaterData({city: this.city.current.value})}>Get weather info</button>
            </div>
        )
    }
}