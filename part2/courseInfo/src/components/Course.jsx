import Header from './Header'
import Content from './Content'
import Nodejs from './Nodejs'
const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content
                pars={course.parts}
            />
            <Nodejs course={course.parts[4]} />
        </div>
    )
}

export default Course;