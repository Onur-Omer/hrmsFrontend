import axios from "axios"

let baseApi="https://hrms--backend.herokuapp.com/"
export default class EmployerService{
   
    getAllEmployers(){
        return axios.get(baseApi+"api/employers/getAllEmployers")
    }
    getByEmployerId(id){
        return axios.get(baseApi+"api/employers/getByEmployerId?id="+id)
    }
}