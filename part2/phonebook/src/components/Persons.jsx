import phoneBook from "../service/phoneBook";
const Persons = ({ persons, search, setRecentDeleted, setDeleted, deleted }) => {
    const onClick = (person) => {
        if (window.confirm(`Do you want to delete ${person.name} leave?`)) {
            console.log(deleted)
            phoneBook.deleteItem(person.id).then(() => {
                setDeleted(true)
                console.log(deleted)
                setRecentDeleted(person.name)
                setTimeout(()=>setDeleted(false), 3000)
            })

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