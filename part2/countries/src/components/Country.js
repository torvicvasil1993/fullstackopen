import React from 'react'
import Languages from './Languages'
import Flags from './Flags'

const Country = ({ country }) => {

    console.log(country)
    return(
            <>
                <h2> {country.name.common} </h2>
                <div> capital {country.capital} </div> 
                <div> area {country.area} </div>
                <h3>languages</h3>                    
                <ul>
                    <Languages languages={country.languages}/>
                </ul>
                <Flags flags={country.flags}/>
            </>
    )
}

export default Country
