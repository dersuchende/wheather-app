import { createStore } from 'redux';
import WeatherReducer from './reducers/WeatherReducer';

const initialState = {
    result: {}
};

const store = createStore(WeatherReducer, initialState);

export default store;