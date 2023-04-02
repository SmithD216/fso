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
        filterResults(e);
    };

    const filterResults = (e) => {
        const result = countries.filter((item) =>
            item.name.common
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
        );

        setResults(result);
    };

    return (
        <div className="App">
            <input type="text" onChange={handleChange} value={search} />
            {results.length > 10 ? (
                <div>Results greater than 10 please specify</div>
            ) : (
                results.map((country, index) => {
                    return <li key={index}>{country.name.common}</li>;
                })
            )}
        </div>
    );
}

export default App;
