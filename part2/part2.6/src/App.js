import { useState, useEffect } from "react";
import Filter from "./Filter";
import Persons from "./Persons";
import Form from "./Form";
import personService from "./services/people";
import Notification from "./Notification";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState(null);

    useEffect(() => {
        personService.getAll().then((response) => {
            setPersons(response.data);
        });
    }, []);

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

        personService.create(nameObject).then((response) => {
            setPersons(persons.concat(response.data));
        });
        setMessage(`${nameObject.name} was added`);
        setTimeout(() => {
            setMessage(null);
        }, 5000);
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

    const deletePerson = (person) => {
        personService.deletePerson(person.id).then((response) => {
            personService
                .getAll()
                .then((response) => {
                    setPersons(response.data);
                })
                .catch((error) => {
                    console.log("There was an error");
                });
        });
        setMessage(`${person.name} was deleted`);
        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={message} />
            <Filter search={search} onChange={handleSearchChange} />
            <Form
                addName={addName}
                newName={newName}
                handleChange={handleChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <Persons persons={persons} deletePerson={deletePerson} />
        </div>
    );
};

export default App;
