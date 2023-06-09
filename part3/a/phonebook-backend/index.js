const express = require("express");
const app = express();

app.use(express.json());

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456",
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523",
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345",
    },
    {
        id: 4,
        name: "Mary Poppendieck",
        number: "39-23-6423122",
    },
];

app.get("/", (request, response) => {
    response.send("<h1>Hello World!</h1>");
});

app.get("/info", (request, response) => {
    const currentDate = new Date();
    response.send(
        `Phonebook has info for ${persons.length} people ${currentDate}`
    );
});

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find((person) => person.id === id);
    if (person) {
        response.json(person);
    } else {
        response.status(404).end();
    }
});

app.get("/api/persons", (req, response) => {
    response.json(persons);
});

app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    persons = persons.filter((person) => person.id !== id);

    response.status(204).end();
});

app.post("/api/persons", (request, response) => {
    const person = request.body;
    person.id = 6;
    persons = persons.concat(person);
    if (person.name === "" || person.number === "") {
        console.log("Name and number must be filled in");
        response.status(404).end();
    } else if (persons.find((pers) => pers.name === person.name)) {
        console.log("Name must be unique");
        response.status(404).end();
    } else {
        response.json(person);
    }
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
