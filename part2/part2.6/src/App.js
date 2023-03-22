import { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

    const addName = (e) => {
        e.preventDefault();

        const nameObject = {
            name: newName,
        };

        if (persons.some((e) => e.name === nameObject.name)) {
            alert("That name has already been entered");
            return;
        }

        setPersons(persons.concat(nameObject));
        setNewName("");
    };

    const handleChange = (e) => {
        setNewName(e.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((p) => (
                <p key={p.name}>{p.name}</p>
            ))}
        </div>
    );
};

export default App;
