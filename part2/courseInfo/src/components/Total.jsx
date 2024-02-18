const Total = (props) => {
    const parts = props.parts
    const total = parts.reduce((t, p) => {
        if (p.exercises) {
            return t + p.exercises;
        } else {
            return t;
        }
    }, 0)
    return (
        <p><b>Number of exercises {total}</b></p>
    )
}

export default Total;