import axios from "axios"

let baseApi="https://hrms--backend.herokuapp.com/"

export default class CvExperianceService{
   
    addCvExperiance(id,values){
        return axios.post(baseApi+"api/cvExperiances/add?cvId="+id,values)
    }

    getAllByEmployeeCv_EmployeeCvId(id){
        return axios.get(baseApi+"/api/cvExperiances/getAllByEmployeeCv_EmployeeCvId?id="+id)
    }
    
}