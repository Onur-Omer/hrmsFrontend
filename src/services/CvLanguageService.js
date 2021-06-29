import axios from "axios"

let baseApi="https://hrms--backend.herokuapp.com/"

export default class CvLanguageService{
   
    addCvLanguage(id,values){
        return axios.post(baseApi+"api/cvSoftwareLangs/add?cvId="+id,values)
    }   

    getAllByEmployeeCv_EmployeeCvId(id){
        return axios.get(baseApi+"api/cvSoftwareLangs/getAllByEmployeeCv_EmployeeCvId?id="+id)
    }
    
}