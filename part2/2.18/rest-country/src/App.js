import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const getAll = () => {
        return axios.get("https://restcountries.com/v3.1/all");
    };

    useEffect(() => {
        getAll()
            .then((response) => {
                setCountries(response.data);
            })
            .catch((error) => {
                console.log(`There was an error ${error}`);
            });
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
        filterResults();
    };

    const filterResults = () => {
        const results = countries.filter((item) =>
            item.name.common.toLowerCase().includes(search.toLowerCase())
        );
        setResults(results);
        console.log(results);
    };

    return (
        <div className="App">
            <input type="text" onChange={handleChange} value={search} />
            {results.map((country) => {
                return <li>{country.name.common}</li>;
            })}
        </div>
    );
}

export default App;
