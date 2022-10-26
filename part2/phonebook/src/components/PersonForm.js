import React from 'react'

const PersonForm = ({onSubmitAddPerson, valuePerson, onChangePerson, valueNewNumber, onChangePersonNumber}) => {
  return (
    <form onSubmit={onSubmitAddPerson}>
        <div>
          name: <input 
          value={valuePerson}
          onChange={onChangePerson}
          />
        </div>
        <div>
          number: <input 
          value={valueNewNumber}
          onChange={onChangePersonNumber}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

export default PersonForm
