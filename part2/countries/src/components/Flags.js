import React from 'react'

const Flags = ({ flags }) => {

    console.log(Object.values(flags)[0])
    return(<img src={Object.values(flags)[0]} alt={Object.values(flags)[0]}></img>)
    
}

export default Flags
