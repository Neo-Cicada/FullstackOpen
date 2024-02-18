
const Persons = ({ persons, search }) => {
    return (
        <>
            {persons.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(item => <p key={item.name}>{item.name} {item.number}</p>)}
        </>
    )
}

export default Persons;