import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(baseUrl);
};

const create = (newObject) => {
    return axios.post(baseUrl, newObject);
};

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`).catch((error) => {
        console.log("There was an error");
    });
};

export default {
    getAll,
    create,
    deletePerson,
};
