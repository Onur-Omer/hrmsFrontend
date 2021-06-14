import axios from "axios"

export default class JobAdService{

    getJobAd(){
        return axios.get("http://localhost:8080/getAllJobAds")
    }

    getAllByCity_CityId(id){
        return axios.get("http://localhost:8080/api/jobAds/getAllByCity_CityId?id="+id)
    }

    getAllByEmployer_EmployerId(id){
        return axios.get("http://localhost:8080/api/jobAds/getAllByEmployer_EmployerId?id="+id)
    }
    getAllByLastDate(date){
        return axios.get("http://localhost:8080/api/jobAds/getAllByLastDate?date="+date)
    }
    getAllByPosition_PositionId(id){
        return axios.get("http://localhost:8080/api/jobAds/getAllByPosition_PositionId?id="+id)
    }

     addJobAd(ad){
         return axios.post("http://localhost:8080/api/jobAds/addJobAd"+ad)
     }

}