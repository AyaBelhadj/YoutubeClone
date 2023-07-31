import axios from 'axios';
const  BASE_URL='https://youtube-v31.p.rapidapi.com'
//const REACT_APP_RAPID_API_KEY='42bf4f536dmsh753d99f8846af42p1548ddjsn5e18e4a2262b'
 const options = {
    
   
    params: {
      url:BASE_URL,
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '42bf4f536dmsh753d99f8846af42p1548ddjsn5e18e4a2262b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI=async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);
    return data;

  }
  