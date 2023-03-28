import { useState } from "react";

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
            <p>filter shown with </p>{" "}
            <input value={search} onChange={handleSearchChange} />
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleChange} />
                </div>
                <div>
                    number:
                    <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((p) => (
                <p key={p.name}>
                    {p.name} {p.number}
                </p>
            ))}
        </div>
    );
};

export default App;
