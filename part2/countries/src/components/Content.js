import React from 'react'
import Button from './Button'
import Country from './Country'



const Content = ({countriesFiltered , setCountriesFiltered}) => {

    //console.log(countries)
    if(countriesFiltered.length > 1 && countriesFiltered.length <= 10){
        console.log("More than 1, less than 10",countriesFiltered)
        return (
            countriesFiltered.map( country => {
                console.log(countriesFiltered.length)
                console.log(country)
                
                return(
                <div key={country.name.common}> {country.name.common}
                <Button onClick={() => setCountriesFiltered([country])} text="show"/>
                </div>                
                )
            })
        )
    }
    else if (countriesFiltered.length === 1) {
        console.log("Equals to 1",countriesFiltered)
        return (
            <Country country={countriesFiltered[0]}/>
        )
    }
    else if (countriesFiltered.length > 10) {
        console.log("Too many",countriesFiltered)
        return (
            <div>Too many, matches specify another filter</div>
        )
    } 
}

export default Content
