import axios from "axios"

let baseApi="https://hrms--backend.herokuapp.com/"
export default class EmployeeService{
   
    getAllEmployees(){
        return axios.get(baseApi+"api/employees/getAllEmployees")
    }
    getByEmployeeId(id){
        return axios.get(baseApi+"api/employees/getByEmployeeId?id"+id)
    }
}