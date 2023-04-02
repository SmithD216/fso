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

    const getDisplay = () => {
        if (results.length > 10) {
            return <div>Results greater than 10</div>;
        } else if (results.length === 1) {
            const country = results[0];
            const languages = Object.values(country.languages);

            return (
                <>
                    <h1>{country.name.common}</h1>
                    <p>capital {country.capital}</p>
                    <p>area {country.area}</p>
                    <h2>languages:</h2>
                    <div>
                        {languages.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </div>
                    <div style={{ fontSize: 250 }}>{country.flag}</div>
                </>
            );
        } else {
            return results.map((country, index) => {
                return <li key={index}>{country.name.common}</li>;
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
