import React, { useState } from "react";

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        "The only way to go fast, is to go well.",
    ];

    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(new Uint8Array(8));
    const [maxPoints, setMaxPoints] = useState("");

    const generateQuote = () => {
        let x = Math.floor(Math.random() * anecdotes.length);
        setSelected(x);
    };

    const voteButton = () => {
        const copy = [...points];
        copy[selected]++;
        setPoints(copy);
        let largest = points.indexOf(Math.max(...points));
        console.log(points);
        console.log(largest);
        setMaxPoints(anecdotes[largest]);
    };

    return (
        <div>
            {anecdotes[selected]}
            <p>has {points[selected]} votes</p>
            <button onClick={generateQuote}>get quote</button>
            <button onClick={voteButton}>vote</button>
            <h1>Quote with the most votes</h1>
            <p>{maxPoints}</p>
        </div>
    );
};

export default App;

// // const History = (props) => {
// //     if (props.allClicks.length === 0) {
// //         return <div> the app is used by pressing the buttons </div>;
// //     }
// //     return <div> button press history: {props.allClicks.join(" ")} </div>;
// // };

// // const Button = ({ handleClick, text }) => (
// //     <button onClick={handleClick}> {text} </button>
// // );

// // const App = () => {
// //     const [left, setLeft] = useState(0);
// //     const [right, setRight] = useState(0);
// //     const [allClicks, setAll] = useState([]);
// //     const [total, setTotal] = useState(0);

// //     const handleLeftClick = () => {
// //         setAll(allClicks.concat("L"));
// //         const updatedLeft = left + 1;
// //         setLeft(updatedLeft);
// //         setTotal(updatedLeft + right);
// //     };
// //     const handleRightClick = () => {
// //         setAll(allClicks.concat("R"));
// //         const updatedRight = right + 1;
// //         setRight(updatedRight);
// //         setTotal(updatedRight + left);
// //     };
// //     return (
// //         <div>
// //             {left}
// //             <Button handleClick={handleLeftClick} text="left" />{" "}
// //             <Button handleClick={handleRightClick} text="right" />
// //             {right}
// //             <History allClicks={allClicks} />
// //             <p>Total: {total}</p>
// //         </div>
// //     );
// // };

// // export default App;

// const Button = ({ handleClick, text }) => {
//     return <button onClick={handleClick}>{text}</button>;
// };

// const Statistics = ({ good, neutral, bad, all, percentage }) => {
//     if (good || neutral || bad) {
//         return (
//             <table>
//                 <tbody>
//                     <tr>
//                         <StatisticLine text="good" value={good} />
//                     </tr>
//                     <tr>
//                         <StatisticLine text="neutral" value={neutral} />
//                     </tr>
//                     <tr>
//                         <StatisticLine text="bad" value={bad} />
//                     </tr>
//                     <tr>
//                         <StatisticLine text="total" value={all} />
//                     </tr>
//                     <tr>
//                         <StatisticLine text="percentage" value={percentage} />
//                     </tr>
//                 </tbody>
//             </table>
//         );
//     } else {
//         return <div>Nothing to show</div>;
//     }
// };

// const StatisticLine = ({ text, value }) => {
//     return (
//         <td>
//             {text} {value}
//         </td>
//     );
// };

// const App = () => {
//     // save clicks of each button to its own state
//     const [good, setGood] = useState(0);
//     const [neutral, setNeutral] = useState(0);
//     const [bad, setBad] = useState(0);
//     const [all, setAll] = useState(0);
//     const [percentage, setPercentage] = useState(0);

//     const positivePercentage = 100 * (good / all);

//     const handleGoodClick = () => {
//         setGood(good + 1);
//         setAll(all + 1);
//         setPercentage(positivePercentage);
//     };

//     const handleBadClick = () => {
//         setBad(bad + 1);
//         setAll(all + 1);
//         setPercentage(positivePercentage);
//     };

//     const handleNeutralClick = () => {
//         setNeutral(neutral + 1);
//         setAll(all + 1);
//         setPercentage(positivePercentage);
//     };

//     return (
//         <>
//             <h1>give feedback</h1>
//             <div>
//                 <Button text="good" handleClick={handleGoodClick} />
//                 <Button text="neutral" handleClick={handleNeutralClick} />
//                 <Button text="bad" handleClick={handleBadClick} />
//                 <h1>statistics</h1>{" "}
//                 <Statistics
//                     good={good}
//                     bad={bad}
//                     neutral={neutral}
//                     total={all}
//                     percentage={percentage}
//                 ></Statistics>
//             </div>
//         </>
//     );
// };

// export default App;
