

const Notification = ({ message, type }) => {
    const success = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    const error = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (message === null) return null

    return (

        <div className='notification' style={type === "success" ? success : error}>
            {type === "success" && `Added ${message}`}
            {type === "error" && `Information of ${message} has already been removed from the server`}
        </div>

    )
}

export default Notification;