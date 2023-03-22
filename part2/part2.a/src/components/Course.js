const Course = ({ courses }) => {
    let totalSum = 0;
    const total = courses.forEach(
        (course) =>
            course.parts.reduce((acc, curr) => (totalSum += curr.exercises)),
        0
    );

    return (
        <>
            {courses.map((course) => (
                <ul key={course.id}>
                    <li>
                        <b>{course.name}</b>
                    </li>
                    {course.parts.map((part) => (
                        <li key={part.id}>
                            {part.name} - {part.exercises}
                        </li>
                    ))}
                    <li>
                        <b>total of {totalSum} exercises</b>
                    </li>
                </ul>
            ))}
        </>
    );
};

export default Course;
