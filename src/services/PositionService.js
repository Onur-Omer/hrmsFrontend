import axios from "axios"

let baseApi="https://hrms--backend.herokuapp.com/"
export default class PositionService{

     addPosition(values){
         return axios.post(baseApi+"api/positions/addPosition",values)
     }

    getAllPositions(){
        return axios.get(baseApi+"api/positions/getAllPositions")
    }
    getByPositionId(id){
        return axios.get(baseApi+"api/positions/getByPositionId?id="+id)
    }
}