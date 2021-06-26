import axios from "axios";

export default class AuthService {
  registerEmployee(values) {
    return axios.post("http://localhost:8080/api/auth/registerEmployee",values);
  }
  registerEmployer(values) {
    return axios.post("http://localhost:8080/api/auth/registerEmployer",values);
  }

  registerPersonel(values) {
    return axios.post("http://localhost:8080/api/auth/registerPersonel",values);
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

  loginForPersonel(values) {
    return axios.post(
      "http://localhost:8080/api/auth/loginForPersonel",
      values
    );
  }
}
