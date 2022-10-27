import React from 'react'

//https://flaviocopes.com/how-to-iterate-object-properties-javascript/
//https://stackoverflow.com/questions/983267/how-to-access-the-first-property-of-a-javascript-object
const Languages = ({ languages }) => {
    languages = Object.entries(languages).map(language => {
        console.log(language[1])
        return(
            <li key={language[1]}> {language[1]} </li>
        )
    })
    return (languages)

}

export default Languages
