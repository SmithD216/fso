import React, { useState } from "react";

// const History = (props) => {
//     if (props.allClicks.length === 0) {
//         return <div> the app is used by pressing the buttons </div>;
//     }
//     return <div> button press history: {props.allClicks.join(" ")} </div>;
// };

// const Button = ({ handleClick, text }) => (
//     <button onClick={handleClick}> {text} </button>
// );

// const App = () => {
//     const [left, setLeft] = useState(0);
//     const [right, setRight] = useState(0);
//     const [allClicks, setAll] = useState([]);
//     const [total, setTotal] = useState(0);

//     const handleLeftClick = () => {
//         setAll(allClicks.concat("L"));
//         const updatedLeft = left + 1;
//         setLeft(updatedLeft);
//         setTotal(updatedLeft + right);
//     };
//     const handleRightClick = () => {
//         setAll(allClicks.concat("R"));
//         const updatedRight = right + 1;
//         setRight(updatedRight);
//         setTotal(updatedRight + left);
//     };
//     return (
//         <div>
//             {left}
//             <Button handleClick={handleLeftClick} text="left" />{" "}
//             <Button handleClick={handleRightClick} text="right" />
//             {right}
//             <History allClicks={allClicks} />
//             <p>Total: {total}</p>
//         </div>
//     );
// };

// export default App;

const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, all, percentage }) => {
    if (good || neutral || bad) {
        return (
            <table>
                <tbody>
                    <tr>
                        <StatisticLine text="good" value={good} />
                    </tr>
                    <tr>
                        <StatisticLine text="neutral" value={neutral} />
                    </tr>
                    <tr>
                        <StatisticLine text="bad" value={bad} />
                    </tr>
                    <tr>
                        <StatisticLine text="total" value={all} />
                    </tr>
                    <tr>
                        <StatisticLine text="percentage" value={percentage} />
                    </tr>
                </tbody>
            </table>
        );
    } else {
        return <div>Nothing to show</div>;
    }
};

const StatisticLine = ({ text, value }) => {
    return (
        <td>
            {text} {value}
        </td>
    );
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);
    const [percentage, setPercentage] = useState(0);

    const positivePercentage = 100 * (good / all);

    const handleGoodClick = () => {
        setGood(good + 1);
        setAll(all + 1);
        setPercentage(positivePercentage);
    };

    const handleBadClick = () => {
        setBad(bad + 1);
        setAll(all + 1);
        setPercentage(positivePercentage);
    };

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
        setAll(all + 1);
        setPercentage(positivePercentage);
    };

    return (
        <>
            <h1>give feedback</h1>
            <div>
                <Button text="good" handleClick={handleGoodClick} />
                <Button text="neutral" handleClick={handleNeutralClick} />
                <Button text="bad" handleClick={handleBadClick} />
                <h1>statistics</h1>{" "}
                <Statistics
                    good={good}
                    bad={bad}
                    neutral={neutral}
                    total={all}
                    percentage={percentage}
                ></Statistics>
            </div>
        </>
    );
};

export default App;
