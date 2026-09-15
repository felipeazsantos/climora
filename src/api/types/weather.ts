import type { Clouds, Coordinates, WeatherCondition, Wind } from "./common";

export interface MainWeatherData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
}

export interface Rain {
    "1h"?: number;
    "3h"?: number;
}

export interface Snow {
    "1h"?: number;
    "3h"?: number;
}

export interface Sys {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface WeatherResponse {
    coord: Coordinates;
    weather: WeatherCondition[];
    base: string;
    main: MainWeatherData;
    visibility: number;
    wind: Wind;
    rain?: Rain;
    snow?: Snow;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
