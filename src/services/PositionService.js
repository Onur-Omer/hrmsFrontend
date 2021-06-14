import axios from "axios"

export default class PositionService{
    // addPosition(){
    //     return axios.post("http://localhost:8080/api/positions/addPosition")
    // }

    getAllPositions(){
        return axios.get("http://localhost:8080/api/positions/getAllPositions")
    }
    getByPositionId(id){
        return axios.get("http://localhost:8080/api/positions/getByPositionId?id="+id)
    }
}