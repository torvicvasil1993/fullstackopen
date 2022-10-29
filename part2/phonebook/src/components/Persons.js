import React from 'react'

const Persons = ({person, deletePerson}) => {
  return(
    <div> {person.name} {person.number}
      <button onClick={() => {
        if (window.confirm(`Delete ${person.name} ?`)) {
          deletePerson(person.id)
        }
        
      }
      }>Delete</button>
    </div>
  )
}

export default Persons
