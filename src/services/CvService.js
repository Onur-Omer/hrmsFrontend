import axios from "axios"

export default class CvService{
   
    // addCv(id){
    //     return axios.post("http://localhost:8080/api/employeeCvs/add?employeeId="+id)
    // }

    getAllByEmployee_EmployeeId(id){
        return axios.get("http://localhost:8080/api/employeeCvs/getAllByEmployee_EmployeeId?id="+id)
    }
    getByEmployeeCvId(id){
        return axios.get("http://localhost:8080/api/employeeCvs/getByEmployeeCvId?id="+id)
    }
}