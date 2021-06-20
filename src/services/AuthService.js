import axios from "axios";

export default class AuthService {
  registerEmployee(values) {
    return axios.post("http://localhost:8080/api/auth/registerEmployee",values);
  }
  registerEmployer(values) {
    return axios.post("http://localhost:8080/api/auth/registerEmployer",values);
  }
  loginForEmployee(values) {
    return axios.post(
      "http://localhost:8080/api/auth/loginForEmployee",
      values
    );
  }
  loginForEmployer(values) {
    return axios.post(
      "http://localhost:8080/api/auth/loginForEmployer",
      values
    );
  }
}
