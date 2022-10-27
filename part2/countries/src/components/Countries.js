import React from 'react'
import Languages from './Languages'
import Flags from './Flags'
const Countries = ({countries}) => {
    //console.log(countries)
    if(countries.length > 1 && countries.length <= 10){
        console.log("More than 1, less than 10",countries)
        return (
            countries.map( country => {
                //console.log(country)
                return(<div key={country.name.common}> {country.name.common} </div>)
            })
        )
    }
    else if (countries.length === 1) {
        console.log("Equals to 1",countries)
        return (
            countries.map(country => {
                return(
                    <>
                        <h2 key={country.name.common}> {country.name.common} </h2>
                        <div key={country.capital}> capital {country.capital} </div> 
                        <div key={country.area}> area {country.area} </div>
                        <h3>languages</h3>                    
                        <ul>
                            <Languages languages={country.languages}/>
                        </ul>
                        <Flags flags={country.flags}/>
                    </>
                )
            }    
            )
        )
    }
    else if (countries.length > 10) {
        //console.log("Too many",countries)
        return (
            <div>Too many, matches specify another filter</div>
        )
    }
}

export default Countries
