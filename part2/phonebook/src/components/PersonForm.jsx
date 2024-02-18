
const PersonForm = ({ onSubmit, newName, setNewName, phoneNumber, setPhoneNumber }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input
                    name='name'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)} />
            </div>
            <div>number: <input
                name='number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            </div>

            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm