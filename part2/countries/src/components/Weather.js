import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


/* https://openweathermap.org/api/one-call-3
 */
const Weather = ({capitalInfo, country}) => {

    //https://medium.com/how-to-react/using-env-file-in-react-js-b2714235e77e
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState([]) 
    
    console.log(api_key)
    useEffect(() => {
        let lat = capitalInfo.latlng[0]
        let lon = capitalInfo.latlng[1]
        //const api_key = process.env.REACT_APP_API_KEY
        console.log('effect weather')
        axios
        .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${api_key}`)
        .then(response => {
            console.log('promise fulfilled weather')
            console.log(response.data)
            setWeather(response.data)
        })
        }, [capitalInfo, api_key])
    return (
        <>
            <h2>Weather in {country}</h2>
            <div>temperature {Math.round((weather.current.temp - 273.15)* 100) / 100} Celsius</div>
        </>
    )
}


export default Weather
