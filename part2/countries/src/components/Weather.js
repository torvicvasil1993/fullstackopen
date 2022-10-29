import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


/* https://openweathermap.org/api/one-call-3
https://www.geeksforgeeks.org/reactjs-functional-components/
https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript
*/

const Temperature = (weather) =>{
    //https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript
    //https://dmitripavlutin.com/check-if-object-has-property-javascript/
    //console.log("Weather", weather)
    if (typeof weather !== 'undefined' && weather.weather.hasOwnProperty('current')) {
        //console.log("weather.current", weather.weather.current.temp)
        if(typeof weather.weather.current !== 'undefined' && weather.weather.current.hasOwnProperty('temp')) {
            //console.log("temp")
            
            return (
                <div>temperature {Math.round((weather.weather.current.temp - 273.15)* 100) / 100} Celsius</div>
            )
        }
        
    }
}

/* https://openweathermap.org/weather-conditions#Icon-list */
const WeatherConditions = (weather) => {
    
    if (typeof weather !== 'undefined' && weather.weather.hasOwnProperty('current')) {       
        if(typeof weather.weather.current !== 'undefined' && weather.weather.current.hasOwnProperty('weather')) {
            //console.log("weather.current", weather.weather.current.weather[0].icon)
            const IMG_NAME = weather.weather.current.weather[0].icon + ".png"
            const URL = "http://openweathermap.org/img/wn/"
            const ICON = URL+IMG_NAME
            //console.log("IMG_NAME",URL,IMG_NAME)

            return (
                <>
                    <img src={ICON} alt=""></img> 
                </>
    )
        }
    }
    
}

const Wind = (weather) => {
    if (typeof weather !== 'undefined' && weather.weather.hasOwnProperty('current')) {
            //console.log("weather.current", weather.weather.current.temp)
            if(typeof weather.weather.current !== 'undefined' && weather.weather.current.hasOwnProperty('wind_speed')) {
                //console.log("temp")
                
                return (
                    <div>wind {weather.weather.current.wind_speed} m/s</div>
                )
        }     
    }
}


const Weather = ({capitalInfo, country}) => {

    //https://medium.com/how-to-react/using-env-file-in-react-js-b2714235e77e
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState([]) 
    
    useEffect(() => {
        let lat = capitalInfo.latlng[0]
        let lon = capitalInfo.latlng[1]
        //const api_key = process.env.REACT_APP_API_KEY
        console.log('effect weather')
        axios
        .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${api_key}`)
        .then(response => {
            console.log('promise fulfilled weather')
            //console.log(response.data)
            setWeather(response.data)
        })
        }, [capitalInfo, api_key])

    return (
        <>
            <h2>Weather in {country}</h2>
            <Temperature weather={weather}/>
            <WeatherConditions weather={weather}/>
            <Wind weather={weather}/>
        </>
    )
}


export default Weather
