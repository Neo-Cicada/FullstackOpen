import axios from 'axios'
const baseURL = "https://studies.cs.helsinki.fi/restcountries/api"
const getAll = () =>{
    return(
        axios.
        get(`${baseURL}/all`)   
    )
}

const searchCountry = (name) =>{
    return(
        axios.get(`${baseURL}/name/${name}`)
    )
}

export default{
    getAll,
    searchCountry
}