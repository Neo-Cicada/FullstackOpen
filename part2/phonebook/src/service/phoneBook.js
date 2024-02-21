import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"

const postItem = (person) =>{
    return(
        axios.post(baseUrl, person)
    )
}
const deleteItem = (id) =>{
    return(
        axios.delete(`${baseUrl}/${id}`)
    )
}
const getItems = () => axios.get(baseUrl);

const updateItem = (id, person) => {
    return(
        axios.put(`${baseUrl}/${id}`, person)
    )
}

export default {
    postItem,
    deleteItem,
    getItems,
    updateItem
}