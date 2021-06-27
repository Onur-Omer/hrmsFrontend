import axios from "axios"

let baseApi="https://hrms--backend.herokuapp.com/"

export default class CvService{
   
    addCv(id,values){
        return axios.post(baseApi+"api/employeeCvs/add?employeeId="+id,values)
    }

    getAllByEmployee_EmployeeId(id){
        return axios.get(baseApi+"api/employeeCvs/getAllByEmployee_EmployeeId?id="+id)
    }
    getByEmployeeCvId(id){
        return axios.get(baseApi+"api/employeeCvs/getByEmployeeCvId?id="+id)
    }
}