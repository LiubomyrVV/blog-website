import axios from "axios";
import { debounce } from "../functions/functions";


const options = {
    method: 'GET',
    url: `http://localhost:3001/stories/list`,
   
};

export const getStories = async (params)  => {
    try {
      const response = await axios.request({ ...options, params: params});
      return response.data; 
    } catch (error) {
      console.error(error);

    }
  }