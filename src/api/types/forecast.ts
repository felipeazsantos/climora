import type { Clouds, Coordinates, WeatherCondition, Wind } from "./common";

export interface ForecastMainData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface ForecastRain {
    "3h"?: number;
}

export interface ForecastSnow {
    "3h"?: number;
}

export interface ForecastListItemSys {
    pod: "d" | "n";
}

export interface ForecastListItem {
    dt: number;
    main: ForecastMainData;
    weather: WeatherCondition[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    rain?: ForecastRain;
    snow?: ForecastSnow;
    sys: ForecastListItemSys;
    dt_txt: string;
}

export interface City {
    id: number;
    name: string;
    coord: Coordinates;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}

export interface ForecastResponse {
    cod: string;
    message: number;
    cnt: number;
    list: ForecastListItem[];
    city: City;
}
