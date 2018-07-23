import constants from '../constants/ActionTypes';

export default function WeatherReducer(
    state = [], action
) {
    // console.log(state);
    // const result = action.response;
    switch (action.type) {
        case constants.ERROR_WEATHER_DATA:
            return Object.assign({}, state, {
                didInvalidate:true
            });
        case constants.REQUEST_WEATHER_DATA:
            return Object.assign({}, state,{
                isFetching:true,
                didInvalidate:false
            });
        case constants.RECEIVE_WEATHER_DATA:
            return Object.assign({}, state, {
                isFetching:false,
                didInvalidate:false,
                result: action.result,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}
