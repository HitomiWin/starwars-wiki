import axios from 'axios'

axios.defaults.baseURL="https://swapi.dev/api/";

const get = async(endpoint)=>{
  const response = await axios.get(endpoint)
  return response
   
  }

  export const getData= async (endpoint,page=null)=>{
    const response = await get(`${endpoint}/?page=${page}`) 
   return {
    count:response.data.count,
    next:response.data.next,
    previouis:response.data.previous,
    results:response.data.results
   }
  }

  export const getFetchedData = async(endpoint,id=null)=>{
    const response = await get(`${endpoint}/${id}/`)
  
    return {
     results:response.data
    }
  }


  





