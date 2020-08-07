import axios from "axios";

export const v4 = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://mymobilecash.themoneytransferapplication.com/web-services/api/v4/services",
  headers: {
    "Content-type": "application/json",
    "accept": "application/json"
  }
});

export const v6 = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://mymobilecash.themoneytransferapplication.com/web-services/api/v6/services",
  headers: {
    "Content-type": "application/json",
    "accept": "application/json"
  }
});