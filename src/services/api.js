import axios from 'axios'
const API = "http://localhost:7777"
const getprojects = () => axios.get(`${API}/projects/all`);
export {getprojects}