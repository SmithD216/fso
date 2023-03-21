const Course = ({ course }) => {
    const sumTotal = course.parts.reduce(function (acc, curr) {
        return acc + curr.exercises;
    }, 0);

    return (
        <>
            <ul>
                {course.parts.map((part) => (
                    <li key={part.id}>
                        {part.name} {part.exercises}
                    </li>
                ))}
            </ul>
            <b>
                <p>total of {sumTotal} exercises</p>
            </b>
        </>
    );
};

export default Course;
