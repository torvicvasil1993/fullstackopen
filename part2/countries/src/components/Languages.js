import React from 'react'

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
