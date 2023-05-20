import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/full-stack-dbef7/us-central1/api", // here will be the api endpoint
});
export default instance;
