import axios from 'axios';
import actions from '../actions/Actions';
import store from '../Store';

const WheatherApi = {
    APIkey: 'ac492df5b4bc300143fe626cb1d001df',
    APIUrl: 'http://api.openweathermap.org/data/2.5/forecast',

    getWeatherConditions(opt){
        let url = `${this.APIUrl}?q=${opt.city},uk&appid=${this.APIkey}`;
        store.dispatch(actions.requestWeatherData('frontend'));
        axios.get(url).then(function(response){
            let result = getWeatherinfo(response.data);
            store.dispatch(actions.receivetWeatherData(opt.city,result));
        })
            .catch(function (error) {
                console.log(error);
            });

    }

};

function  getWeatherinfo(response){
        let listData = {};
        return {
            city : response.city,
            forecast: getWheatherDataList(response.list),
        };
}

function getWheatherDataList(list){
    let listData = {};
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];
    list.forEach(item => {
        let wdate = new Date(item.dt*1000);
        let day = wdate.getDay();
        listData[weekday[day]] =  list.filter(f_item => {
            let fdate = new Date(f_item.dt*1000);
            let fday = fdate.getDay();
            return day === fday;
        }).map(w_item =>  {
            return{
                time: new Date(w_item.dt*1000).getHours(),
                weather: w_item.weather[0]
            }
        });
    });
    return listData;
}

export default WheatherApi;