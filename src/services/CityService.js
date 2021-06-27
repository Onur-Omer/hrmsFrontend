import axios from "axios"

let baseApi="https://hrms--backend.herokuapp.com/"
export default class CityService{
   
    getAll(){
        return axios.get(baseApi+"api/city/getAll")
    }
    getByCityId(id){
        return axios.get(baseApi+"api/city/getByCityId?id="+id)
    }
}