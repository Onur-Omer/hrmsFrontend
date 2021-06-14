import axios from "axios"

export default class EmployeeService{
   
    getAllEmployees(){
        return axios.get("http://localhost:8080/api/employees/getAllEmployees")
    }
    getByEmployeeId(id){
        return axios.get("http://localhost:8080/api/employees/getByEmployeeId?id"+id)
    }
}