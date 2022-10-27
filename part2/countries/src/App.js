import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {

  const [countries, setCountries] = useState([]) 
  const [newFilter, setNewFilter] = useState('')
  const [countriesFiltered, setCountriesFiltered] = useState([])


  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        //console.log(response.data)
        setCountries(response.data)
        setCountriesFiltered(response.data)
      })
    }, [])

  const handleFilter = (event) => {
    let filtered = []
    setNewFilter(event.target.value)
    console.log(event.target.value)
     countries.forEach(country => {
      console.log(country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
      if(country.name.common.toLowerCase().includes(event.target.value.toLowerCase())) {
        filtered.push(country)
        console.log(filtered)
      } 
    })
    if(event.target.value === " "){
      filtered = []
    }
    if(event.target.value === ""){
      filtered = [...countries]
    }
    setCountriesFiltered(filtered)
    console.log(filtered) 
  }

  return (
    <>
      <Filter value={newFilter} onChange={handleFilter} />
      <Countries countries={countriesFiltered} />
    </>
  );
}

export default App;
