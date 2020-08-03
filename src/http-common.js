import axios from "axios";

export default axios.create({
  baseURL: "https://mymobilecash.themoneytransferapplication.com/web-services/api/v6",
  headers: {
    "Content-type": "application/json",
    "accept": "application/json"
  }
});