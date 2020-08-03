
import http from "../http-common";

const registerCustomer = data => {
  return http.post("usermanagement/register-customer", data);
};

const Login = data => {
  return http.post("securitymanagement/login", data);
};

export default {
  registerCustomer,
  Login
};