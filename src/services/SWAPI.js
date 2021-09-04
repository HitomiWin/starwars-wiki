import axios from 'axios'

axios.defaults.baseURL=" https://swapi.dev/api/";

const get = async(endpoint)=>{
  const response = await axios.get(endpoint)
  return response
  }

  export const getPeople=async (people)=>{
    const response = await get(people)
    return {
      count:response.data.count,
      next:response.data.next,
      previouis:response.data.previous,
      results:response.data.results
    }
  }




