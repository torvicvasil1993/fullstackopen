const Header = (props) => {
  console.log("Header",props)
  return (
      <h1>{props.name}</h1>
  )

}

const Content = (props) => {
  console.log("Content",props);
  return (
    <div>
        <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
        <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
        <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />  
    </div>
  )
}

const Part = (props) => {
  console.log("Part",props)
  return(
    <div>
      {props.part} {props.exercises}
    </div>
  )
}

const Total = (props) => {
  console.log("Total",props)
  return (
    <div>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</div>
  )
}

const Course = (props) => {
  return (
    <>
      <Header name={props.name} />
      <Content parts={props.parts}/>  
      <Total  parts={props.parts}/>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Course name={course.name} parts={course.parts}/>
    </div>
  )
}

export default App
