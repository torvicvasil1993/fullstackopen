import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'

/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
https://reactjs.org/docs/forms.html#controlled-components
https://reactjs.org/docs/forms.html
*/


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [personsFiltered, setPersonsFiltered] = useState([])
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)



 useEffect(() => {
  console.log('effect')
  personsService
    .getAll()
    .then(initialPersons => {
      console.log('promise fulfilled')
      console.log(initialPersons)

      setPersons(initialPersons)
      setPersonsFiltered(initialPersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    // ref.: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // https://flaviocopes.com/how-to-check-undefined-property-javascript/#:~:text=%E2%AD%90%EF%B8%8F-,In%20a%20JavaScript%20program%2C%20the%20correct%20way%20to%20check%20if,to%20use%20the%20typeof%20operator.&text=If%20the%20value%20is%20not,returns%20the%20'undefined'%20string.
    
    let found = persons.find(element => element.name.toLowerCase() === newName.toLowerCase())
    console.log("found",found)
    if (typeof(found) !== 'undefined' && found.name.toLowerCase() === newName.toLowerCase()) {
      if( window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`) ) {
        personsService
          .update(found.id, personObject)
          .then( returnedPerson => {
            setPersons( persons.map( person => person.id !== found.id ? person : returnedPerson ) ) 
            setPersonsFiltered( persons.map( person => person.id !== found.id ? person : returnedPerson ) )
            setMessage( `Updated '${newName}'` )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch(error => {
            setErrorMessage(
              `'${newName}' was already removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.filter(n => n.id !== found.id))
            setPersonsFiltered(persons.filter(n => n.id !== found.id))
          })
        
          
      }
    }
    else {

      personsService
      .create(personObject)
      .then(returnedPerson => {  
        setPersons(persons.concat(returnedPerson))
        setPersonsFiltered(persons.concat(returnedPerson))
        console.log("add person",personsFiltered)
        setMessage( `Added '${newName}'` )
        setTimeout(() => {
              setMessage(null)
        }, 5000)
      })
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id) => {
    personsService.deletePerson(id).then(() => { 
      setPersons(persons.filter(person => person.id !== id))
      setPersonsFiltered(persons.filter(person => person.id !== id))
    })     
        
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
      <Notification message={message} />
      <ErrorMessage message={errorMessage} />
      <Filter value={newFilter} onChange={handleFilter} />
      <h2>add a new</h2>
       <PersonForm 
          onSubmitAddPerson={addPerson} 
          valuePerson={newName}
          onChangePerson={handlePersonChange}
          valueNewNumber={newNumber}
          onChangePersonNumber={handlePersonNumber}
        />
      <h2>Numbers</h2>
      {personsFiltered.map(person =>
          <Persons key={person.name} person={person} deletePerson={() => deletePerson(person.id)}/>
      )}
    </div>
  )
}

export default App
