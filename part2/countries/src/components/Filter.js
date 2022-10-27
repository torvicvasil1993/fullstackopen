import React from 'react'

const Filter = ({value, onChange}) => {
  //console.log("value", value)
  return (<form>
    <div>
      find countries <input 
      value={value}
      onChange={onChange}
      />
      </div>
  </form>
  )
}

export default Filter
