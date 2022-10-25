import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    // ref.: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // https://flaviocopes.com/how-to-check-undefined-property-javascript/#:~:text=%E2%AD%90%EF%B8%8F-,In%20a%20JavaScript%20program%2C%20the%20correct%20way%20to%20check%20if,to%20use%20the%20typeof%20operator.&text=If%20the%20value%20is%20not,returns%20the%20'undefined'%20string.
    let found = persons.find(element => element.name === newName)
    console.log("found",found)
    if (typeof(found) !== 'undefined' && found.name === newName) {
      //https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
      window.alert(`${newName} is already added to phonebook`);
    }
    else {
      setPersons(persons.concat(personObject))
    }
    setNewName('')
  }


  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePersonNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handlePersonChange}
          />
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handlePersonNumber}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
          <div key={person.name}> {person.name} {person.number}</div>
        )}

    </div>
  )
}

export default App
