import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import DisplayOne from "./DisplayOne";

function App() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [display, setDisplay] = useState(false);

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

    const toggleOne = (e) => {
        setDisplay(!display);
    };

    const getDisplay = () => {
        if (results.length > 10) {
            return (
                <div>
                    <div>Results greater than 10</div>
                </div>
            );
        } else if (results.length === 1) {
            return (
                <DisplayOne
                    country={results[0]}
                    languages={Object.values(results[0].languages)}
                />
            );
        } else {
            return results.map((country, index) => {
                return (
                    <li key={index}>
                        {country.name.common}
                        <button onClick={toggleOne}>show</button>
                    </li>
                );
            });
        }
    };

    return (
        <div className="App">
            <input type="text" onChange={handleChange} value={search} />
            {getDisplay()}
        </div>
    );
}

export default App;
