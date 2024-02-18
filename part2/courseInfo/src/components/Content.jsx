import Part from './Part'
import Total from './Total';


const Content = (props) => {
    return (
        <>
            <Part part={props.pars[0].name} exercise={props.pars[0].exercises} />
            <Part part={props.pars[1].name} exercise={props.pars[1].exercises} />
            <Part part={props.pars[2].name} exercise={props.pars[2].exercises} />
            <Part part={props.pars[3].name} exercise={props.pars[3].exercises} />
            <Total parts={props.pars} />
        </>
    )
}

export default Content;