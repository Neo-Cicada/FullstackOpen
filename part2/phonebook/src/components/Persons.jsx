import phoneBook from "../service/phoneBook";
const Persons = ({ persons, search }) => {
    const onClick = (person) => {
        if (window.confirm(`Do you want to delete ${person.name} leave?`)) {
            phoneBook.deleteItem(person.id)
        }  
    }

    return (
        <>
            {persons
                .filter(item => item.name
                    .toLowerCase()
                    .includes(search
                        .toLowerCase()))
                .map(item =>
                    <div key={item.name} style={{ display: "flex", alignItems: "center" }}>
                        <p>{item.name} {item.number}</p>
                        <button onClick={() => onClick(item)} style={{ height: "20px" }}>delete</button>
                    </div>)}




        </>
    )
}

export default Persons;