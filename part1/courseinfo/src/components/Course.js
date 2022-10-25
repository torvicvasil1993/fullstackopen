import React from 'react'

const Course = (props) => {
  return (
    <>
      <Header name={props.course.name} />
      <Content parts={props.course.parts}/>  
      <Total  parts={props.course.parts}/>
    </>
  )
}

const Header = (props) => {
  //console.log("Header",props)
  return (
      <h1>{props.name}</h1>
  )

}

const Content = (props) => {
  console.log("Content",props);
  return (
    <div>
        {props.parts.map( part =>  
        <Part key={part.id} part={part.name} exercises={part.exercises} /> )} 
    </div>
  )
}

const Part = (props) => {
  //console.log("Part",props)
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

/* https://stackoverflow.com/questions/5732043/how-to-call-reduce-on-an-array-of-objects-to-sum-their-properties */
const Total = (props) => {
  //console.log("Total",props.parts)
  const total = props.parts.reduce((s, p) => s + p.exercises, 0)
  return (
    <div><strong>total of {total} exercises</strong></div>
  )
}

export default Course
