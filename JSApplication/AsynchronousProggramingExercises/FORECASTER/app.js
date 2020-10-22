import * as data from './data.js'
import el from './dom.js';

window.addEventListener('load', () => {
    const mainDiv = document.querySelector('#forecast');
    const todayDiv = document.querySelector('#current');
    const upcomingDiv = document.querySelector('#upcoming');
    const inputDiv = document.querySelector('#location');

    document.querySelector('#submit').addEventListener('click', getForecast);
    
    async function getForenocast() {
        const locationName = inputDiv.value;
        const code =await data.getCode(locationName);
        const  result = [
            data.getToday,
            data.getUpcoming
        ];
        const today = await data.getToday(code);
        const upcoming = await data.getToday(code);

    }
});

