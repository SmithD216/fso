const DisplayOne = ({ country, languages }) => {
    return (
        <>
            {" "}
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>languages:</h2>
            <div>
                {languages.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </div>
            <div style={{ fontSize: 250 }}>{country.flag}</div> )
        </>
    );
};

export default DisplayOne;
