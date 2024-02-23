import { useState, useEffect } from "react"
import countryApi from "./services/countryApi"
function App() {
  const [data, setData] = useState([])
  const [country, setCountry] = useState("");
  useEffect(() => {
    countryApi.getAll().then(response => setData(response.data))
  }, [country])
  const filteredData = data.filter(item => item.name.common.toLowerCase().includes(country.toLowerCase()))
  return (
    <>
      <div>
        <p>find countries</p>
        <input
          type="text"
          id="country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div>



        {filteredData.length === 1 ?
          <div>
            <p style={{ fontWeight: "bold", fontSize: 25 }}>{filteredData[0].name.common}</p>
            <p>capita: {filteredData[0].capital[0]}</p>
            <p>area: {filteredData[0].area}</p>
            <p style={{ fontWeight: "bold", fontSize: 20 }}>languages</p>
            <ul>
              {Object.keys(filteredData[0].languages).map((key, index) => (
                <li key={index}>{filteredData[0].languages[key]}</li>
              ))}
            </ul>
            <img src={filteredData[0].flags["png"]} alt={`flag of ${filteredData[0].name.common}`} />
          </div> :
          filteredData.length >= 10 ?
            <p>Too many matches, specify another filter</p>
            :
            filteredData.map(item =>
              <div style={{ display: "flex", alignItems: 'center', gap: 5 }}>
                <p key={item.name.common}>{item.name.common}</p>
                <button style={{ width: 75, height: 20 }}
                  onClick={() => setCountry(item.name.common)}
                >show</button>
              </div>
            )}

      </div>
    </>
  )
}

export default App
