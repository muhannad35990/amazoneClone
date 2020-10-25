import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-c488e/us-central1/api", //the API URL
});
export default instance;
