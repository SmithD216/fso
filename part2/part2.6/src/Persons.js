const Persons = ({ persons, deletePerson }) => {
    return (
        <div>
            {persons.map((p) => (
                <p key={p.name}>
                    {p.name} {p.number}
                    <button onClick={() => deletePerson(p)}>Delete</button>
                </p>
            ))}
        </div>
    );
};

export default Persons;
