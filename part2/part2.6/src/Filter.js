const Filter = ({ search, onChange }) => {
    return (
        <>
            <p>filter shown with </p>
            <input value={search} onChange={onChange} />
        </>
    );
};

export default Filter;
