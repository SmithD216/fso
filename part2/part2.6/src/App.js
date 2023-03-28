import { useState } from "react";
import Filter from "./Filter";
import Persons from "./Persons";
import Form from "./Form";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-1234567" },
        { name: "Ada Lovelace", number: "39-44-5323523" },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [search, setSearch] = useState("");

    const addName = (e) => {
        e.preventDefault();

        const nameObject = {
            name: newName,
            number: newNumber,
        };

        if (
            persons.some(
                (e) =>
                    e.name === nameObject.name || e.number === nameObject.number
            )
        ) {
            alert(`${nameObject.name} is already added to phonebook`);
            return;
        }

        setPersons(persons.concat(nameObject));
        setNewName("");
        setNewNumber("");
    };

    const filterResults = () => {
        const regex = new RegExp(search, "i");
        const filteredResults = () =>
            persons.filter((person) => person.name.match(regex));
        setPersons(filteredResults);
    };

    const handleChange = (e) => {
        setNewName(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        filterResults();
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter search={search} onChange={handleSearchChange} />
            <Form
                addName={addName}
                newName={newName}
                handleChange={handleChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <Persons persons={persons} />
        </div>
    );
};

export default App;
