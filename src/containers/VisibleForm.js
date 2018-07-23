import {connect} from 'react-redux';
import Form from '../components/Form';
import ViewWrapper from '../components/ViewWrapper';
import WeatherApi from '../api/WeatherApi';


// Map Redux state to component props
function mapStateToProps(state) {
    return {
        result: state.result
    };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        getWheaterData: opt => {
            WeatherApi.getWeatherConditions(opt);
        }
    };
}

// Connected Component
const VisibleForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewWrapper);


export default VisibleForm;