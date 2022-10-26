import { useState } from 'react'


/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
https://reactjs.org/docs/forms.html#controlled-components
https://reactjs.org/docs/forms.html
*/

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Arto Temple', number: '040-123456', id: 5 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [personsFiltered, setPersonsFiltered] = useState(persons)


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
      setPersonsFiltered(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
  }


  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePersonNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
    
  }

  /* Refs.:
  https://www.w3schools.com/jsref/jsref_includes_array.asp
  https://www.w3schools.com/jsref/jsref_foreach.asp
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
  https://www.freecodecamp.org/news/how-to-insert-an-element-into-an-array-in-javascript/#:~:text=When%20you%20want%20to%20add,your%20array%2C%20use%20splice()%20.
  
  */
  const handleFilter = (event) => {
    let filtered = []
    setNewFilter(event.target.value)
    persons.forEach(person => {
      //console.log(event.target.value)
      //console.log(person)
      //console.log(person.name.toLowerCase().includes(event.target.value))
      if(person.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        filtered.push(person)
        //console.log(filtered)
      }
    })
    if(event.target.value === " "){
      filtered = []
    }
    if(event.target.value === ""){
      filtered = [...persons]
    }
    setPersonsFiltered(filtered)
    console.log(filtered)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with: <input 
          value={newFilter}
          onChange={handleFilter}
          />
        </div>
      </form>
      <h2>add a new</h2>
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
      {personsFiltered.map(person =>
          <div key={person.name}> {person.name} {person.number}</div>
        )}

    </div>
  )
}

export default App
