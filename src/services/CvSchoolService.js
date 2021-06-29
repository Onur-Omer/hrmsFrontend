import axios from "axios"

let baseApi="https://hrms--backend.herokuapp.com/"

export default class CvSchoolService{
   
    addCvSchool(id,values){
        return axios.post(baseApi+"api/cvSchools/add?cvId="+id,values)
    }   

    getAllByEmployeeCv_EmployeeCvId(id){
        return axios.get(baseApi+"api/cvSchools/getAllByEmployeeCv_EmployeeCvId?id="+id)
    }
    
}