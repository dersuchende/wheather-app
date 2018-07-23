var constants = require('../constants/ActionTypes') ;

module.exports = {
    requestWeatherData: function(request){
        return {
            type: constants.REQUEST_WEATHER_DATA,
            request
        };
    },

    receivetWeatherData: function(request, response) {
        return {
            type: constants.RECEIVE_WEATHER_DATA,
            request,
            result: response,
            receivedAt: Date.now()
        };
    }
};