import axios from "axios";
import { API_URL } from "./api";



const options = {
    method: 'GET',
    url: `${API_URL}/stories/list`,
   
};

export const getStories = async (params)  => {
    try {
      const response = await axios.request({ ...options, params: params});
      return response.data; 
    } catch (error) {
      console.error(error);

    }
  }