import { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-1234567" },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

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

    const handleChange = (e) => {
        setNewName(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
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
