import axios from "axios";

const instance = axios.create({
  baseURL: "https://clone2tinder-mern.herokuapp.com/",
});

export default instance;
