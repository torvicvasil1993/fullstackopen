import React from 'react'

const Filter = ({value, onChange}) => {
  //console.log("value", value)
  return (<form>
    <div>
      filter shown with: <input 
      value={value}
      onChange={onChange}
      />
      </div>
  </form>
  )
}

export default Filter
