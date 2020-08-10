
import { v6, v4 } from "../http-common";

// Register customer
const registerCustomer = data => {
    return v6.post("/usermanagement/register-customer", data);
};

const login = data => {
    return v4.post("/login", data);
};

// Get available country
const supportedDestinationCountry = data => {
    return v6.get("/quote/supported-destination-countries/" + data);
};

// Get available country
const supportedDeliveryMethods = (origin, destination) => {
    return v6.get("/quote/supported-delivery-methods/" + `${origin}/${destination}`);
};

const supportedCurrencies = (origin, destination, delivery) => {
    return v6.get("/quote/supported-currencies/" + `${origin}/${destination}/${delivery}`);
};

const supportedDeliveryCurrencies = (origin, destination, delivery, currency) => {
    return v6.get("/quote/supported-delivery-currencies/" + `${origin}/${destination}/${delivery}/${currency}`);
};

const preTopUp = (payload) => {
    return v6.post("transactionmanagement/pre-topup", payload);
}

const callQuote = (payload) => {
    return v6.post("/quote/callQuote", payload);
};

export default {
  registerCustomer,
  login,
  supportedDestinationCountry,
  supportedDeliveryMethods,
  supportedCurrencies,
  supportedDeliveryCurrencies,
  preTopUp,
  callQuote
};