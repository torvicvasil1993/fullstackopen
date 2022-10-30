import React from 'react'

const Persons = ({person, deletePerson}) => {
  return(
    <div> {person.name} {person.number}
      <button onClick={() => {
        //https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
        if (window.confirm(`Delete ${person.name} ?`)) {
          deletePerson(person.id)
        }
        
      }
      }>Delete</button>
    </div>
  )
}

export default Persons
