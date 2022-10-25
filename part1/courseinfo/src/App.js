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
    <p>
      {props.part} {props.exercises}
    </p>
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
      <Header name={props.course.name} />
      <Content parts={props.course.parts}/>  
      <Total  parts={props.course.parts}/>
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
