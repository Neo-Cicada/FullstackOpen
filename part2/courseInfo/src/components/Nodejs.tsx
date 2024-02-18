import React from 'react'
import Header from "./Header"
import Part from "./Part"
import Total from './Total'


const Nodejs = (props) => {
    const course = props.course

    return (
        <>
            <Header course={course.name} />
            <Part part={course.parts[0].name} exercise={course.parts[0].exercises} />
            <Part part={course.parts[1].name} exercise={course.parts[1].exercises} />
            <Total parts={course.parts} />
        </>
    )
}

export default Nodejs;