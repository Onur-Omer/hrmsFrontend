import axios from "axios"

let baseApi="https://hrms--backend.herokuapp.com/"

export default class CvForeignLangService{
   
    addCvForeignLang(id,values){
        return axios.post(baseApi+"api/cvForeignLanguage/add?cvId="+id,values)
    }   

    getAllByEmployeeCv_EmployeeCvId(id){
        return axios.get(baseApi+"api/cvForeignLanguage/getAllByEmployeeCv_EmployeeCvId?id="+id)
    }
    
}