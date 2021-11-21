import WeatherApiResponse from "../objects/WeatherApiResponse";
import jQuery from 'jquery';
import $ from 'jquery';

const api_key: string = 'f3af2975bdd05e1ed2778f6194218676';
const units: string = 'metric';
const request_url: string = 'https://api.openweathermap.org/data/2.5/forecast';

export default function getForecasts(onResponse: CallableFunction, city: string): void {
    let params = getQueryParams(city);
    const settings = getQuerySettings(params);

    $.ajax(settings).done(function (response: WeatherApiResponse) {
        onResponse(response);
    }).catch((error) => {
        alert('Місто не знайдено');
    });
}

function getQueryParams(city: string): string {
    return jQuery.param({
        q: city,
        units: units,
        //sorry for using an api key on client side :(
        appid: api_key
    });
}

function getQuerySettings(params: string): Object {
    return {
        "async": true,
        "crossDomain": true,
        "data": params,
        "url": request_url,
        "method": "GET",
    };
}