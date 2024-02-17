import Part from './Part'

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

export default Content;