import axios from "axios"

let baseApi="https://hrms--backend.herokuapp.com/"
export default class JobAdService{

    getJobAd(){
        return axios.get(baseApi+"api/getAllJobAds")
    }

    getAllByCity_CityId(id){
        return axios.get(baseApi+"api/jobAds/getAllByCity_CityId?id="+id)
    }

    getAllByEmployer_EmployerId(id){
        return axios.get(baseApi+"api/jobAds/getAllByEmployer_EmployerId?id="+id)
    }
    getAllByLastDate(date){
        return axios.get(baseApi+"api/jobAds/getAllByLastDate?date="+date)
    }
    getAllByPosition_PositionId(id){
        return axios.get(baseApi+"api/jobAds/getAllByPosition_PositionId?id="+id)
    }

     addJobAd(ad){
         return axios.post(baseApi+"api/jobAds/addJobAd"+ad)
     }

}