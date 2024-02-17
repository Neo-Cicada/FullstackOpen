import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {
    console.log(course)
    return (
        <div>
            <Header course={course.name} />
            <Content
                pars={course.parts}
            />
        </div>
    )
}

export default Course;