const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  // console.log(props)
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  // console.log(props)
  return (
    <>
      <Part part={props.pars[0].name} exercise={props.pars[0].exercises} />
      <Part part={props.pars[1].name} exercise={props.pars[1].exercises} />
      <Part part={props.pars[2].name} exercise={props.pars[2].exercises} />

    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
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
      <Header course={course.name} />
      <Content
        pars={course.parts}
      />
      <Total parts={course.parts} />
    </div>
  )
}

export default App