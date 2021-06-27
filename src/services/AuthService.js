import axios from "axios";

let baseApi="https://hrms--backend.herokuapp.com/"
export default class AuthService {
  registerEmployee(values) {
    return axios.post(baseApi+"api/auth/registerEmployee",values);
  }
  registerEmployer(values) {
    return axios.post(baseApi+"api/auth/registerEmployer",values);
  }

  registerPersonel(values) {
    return axios.post(baseApi+"api/auth/registerPersonel",values);
  }
  loginForEmployee(values) {
    return axios.post(
      baseApi+ "api/auth/loginForEmployee",
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
