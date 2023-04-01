const Notification = ({ message }) => {
    if (message === null) {
        return null;
    } else if (message.includes("deleted")) {
        return <div className="deleted">{message}</div>;
    } else if (message.includes("added")) {
        return <div className="added">{message}</div>;
    }
};

export default Notification;
